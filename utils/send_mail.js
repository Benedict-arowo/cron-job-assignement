require("dotenv").config({ path: "./.env" });
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
	service: "Gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
});

// Function to send birthday emails
const sendEmails = async (users = []) => {
	for (const user of users) {
		let mailOptions = {
			from: '"Birthday Wishes" <birthday-wishes@noreply.com>', // Sender address
			to: user.email, // List of recipients
			subject: "Happy Birthday!", // Subject line
			text: `Dear ${user.username},\n\nHappy Birthday! Have a great day!\n\nBest Regards,\nEmail Wisher`, // Plain text body
			html: `<p>Dear ${user.username},</p><p>Happy Birthday! Have a great day!</p><p>Best Regards,<br>Email Wisher</p>`, // HTML body
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(`Error: ${error}`);
			}
			console.log(`Message sent: ${info.response}`);
		});
	}
};

module.exports = sendEmails;
