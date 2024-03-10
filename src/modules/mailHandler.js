import nodemailer from 'nodemailer';
import { random } from './random';

const transporter = nodemailer.createTransport({
	host: process.env.SMTP,
	port: 465,
	secure: true,
	auth: {
		user: process.env.MAIL,
		pass: process.env.MAIL_PASS,
	},
});

function sendMail(email, head, body) {
	try {
		// setup email data
		const mailOptions = {
			from: `"AirJet" <${process.env.MAIL}>`,
			to: email,
			subject: head,
			text: body,
		};
		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
			}
			else {
				console.log('Email sent: ' + info.response);
			}
		});
		return true;
	}
	catch (err) {
		return false;
	}
}

function sendVerification(email, userId, type = 'register', code = null) {
	try {
		code ? code : random(100000, 999999);
		let title, body;
		switch (type) {
		case 'email':
			title = 'Your verification code for HSP-GDH';
			body = `Verification code: ${code}\nLink: ${process.env.DOMAIN}/email/verify?code=${code}`;
			break;
		case 'password':
			title = 'Your password reset code for HSP-GDH';
			body = `Verification code: ${code}\nLink: ${process.env.DOMAIN}/password/reset?u=${userId}&c=${code}`;
			break;
		case '2fa':
			title = 'Your 2FA code for HSP-GDH';
			body = `Verification code: ${code}`;
			break;
		default:
			return false;
		}
		if (sendMail(email, title, body)) return code;
		return false;
	}
	catch (err) {
		return false;
	}
}

export {
	sendMail,
	sendVerification,
};