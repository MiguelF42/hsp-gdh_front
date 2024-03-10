import jwt from 'jsonwebtoken';
import { Level } from 'level';
import { pool } from './databaseManager';
import { respondWithStatus } from './requestHandler';

const db = new Level('tokens', { valueEncoding: 'json' });

export async function generateToken(userId, password) {
	const token = jwt.sign({ userId: userId, password: password }, process.env.JWT_SECRET, { expiresIn: '7d' });
	await db.put(token, 'valid');
	return token;
}


export async function verifyToken(req, res, next) {
	const token = req.headers.authorization;
	if (!token) return await respondWithStatus(res, 401, 'No token provided');

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded.userId;

		const [user] = await pool.execute('SELECT * FROM users WHERE id = ? LIMIT 1', [req.userId]);
		if (user.length === 0) return await respondWithStatus(res, 404, 'User not found');

		const passwordMatch = await Bun.password.verify(decoded.password, user[0].password);
		if (!passwordMatch) return await respondWithStatus(res, 401, 'Token is invalid');
		const tokenStatus = await db.get(token);
		if (tokenStatus != 'valid') {
			return await respondWithStatus(res, 401, 'Token has been revoked ');
		}
		next();
	}
	catch (error) {
		return await respondWithStatus(res, 401, 'Invalid user');
	}
}

export async function revokeToken(token) {
	db.put(token, 'revoked');
}