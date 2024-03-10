import { pool } from './databaseManager.js';
import { respondWithStatus } from './requestHandler.js';
import { error } from './logManager.js';


export async function userExists(userId) {
	try {
		const [user] = await pool.execute('SELECT * FROM users WHERE id = ? LIMIT 1', [userId]);
		if (user.length === 0) return false;
		return true;
	}
	catch (err) {
		error(err);
		return false;
	}
}

export async function isBanned(userId) {
	try {
		const [bannedUser] = await pool.execute('SELECT * FROM bans WHERE user_id = ? LIMIT 1', [userId]);
		if (bannedUser.length > 0) return true;
		return false;
	}
	catch (err) {
		error(err);
		return true;
	}
}

// permissionType is bitfield
// 1 = read
// 2 = write
// 4 = delete
export async function verifyPermissions(userId, permissionName, permissionType) {
	try {
		const [perms] = await pool.execute(`SELECT r.${permissionName}_bitfield AS permissionBitfield FROM users u INNER JOIN user_roles ur ON u.id = ur.user_id INNER JOIN roles r ON ur.role_id = r.id WHERE u.id = ?`, [userId]);
		for (const row of perms) {
			if (row.permissionBitfield & permissionType) {
				return true;
			}
		}
	}
	catch (err) {
		error(err);
		return false;
	}
}

export async function checkIfUserEmailIsVerified(userId) {
	try {
		const [user] = await pool.execute('SELECT email_verified FROM users WHERE id = ? LIMIT 1', [userId]);
		if (user.length === 0) return false;
		return user[0].email_verified;
	}
	catch (err) {
		error(err);
		return false;
	}
}

export async function checkUserExists(req, res, next) {
	const userId = req.userId;
	if (!userExists(userId)) return await respondWithStatus(res, 404, 'User not found');
	next();
}

export async function checkBanned(req, res, next) {
	const userId = req.userId;
	if (isBanned(userId)) return await respondWithStatus(res, 403, 'User is banned');
	next();
}

export const checkPermissions = (permissionName, permissionType) => async (req, res, next) => {
	const userId = req.userId;
	if (!verifyPermissions(userId, permissionName, permissionType)) return await respondWithStatus(res, 403, 'Missing permission');
	next();
};

export const checkEmailVerified = async (req, res, next) => {
	const userId = req.userId;
	if (!checkIfUserEmailIsVerified(userId)) return await respondWithStatus(res, 403, 'Email not verified');
	next();
};