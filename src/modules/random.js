import crypto from 'crypto';

export function random(x, y) {
	return crypto.randomInt(x, y + 1);
}

export function random2(min, max) {
	const range = max - min + 1;
	const byteLength = Math.ceil(Math.log2(range) / 8);
	let randomValue;

	do {
		const randomBytes = crypto.randomBytes(byteLength);
		randomValue = parseInt(randomBytes.toString('hex'), 16);
	} while (randomValue >= range);

	return randomValue + min;
}

export function randomHEX(x) {
	return crypto.randomBytes(x).toString('hex');
}