const express = require('express');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
	return res.send('ping');
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/email', async (req, res) => {
	const { to, messageData } = req?.body;
	const { name, email, phone, message } = messageData;
	let errors = {};

	try {
		const msg = {
			to: 'kristin@matchmakingnannyservices.com',
			from: 'support@matchmakingnannyservices.com',
			subject: 'New Question From MNS',
			html: `<h3>Hello, Kristin!</h3> <h4>You have a new message...</h4> <p>Name: ${name}</p> <p>Email: ${email}</p> <p>Phone Number: ${phone}</p> <p>Message: ${message}</p>`,
		};

		const conformation = {
			to,
			from: 'support@matchmakingnannyservices.com',
			subject: 'Thank You!',
			text: 'Thank you for your interest in our services. We have received you email, and will contact you within 48 hours.',
		};

		await sgMail.send(msg);
		await sgMail.send(conformation);

		res.json({ messege: 'Email sent successfully!' });
	} catch (err) {
		errors.email = 'Error sending email';
		return res.status(400).json(errors);
	}
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
