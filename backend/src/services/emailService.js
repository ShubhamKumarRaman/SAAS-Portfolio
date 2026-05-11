const nodemailer = require('nodemailer')

//transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

//Send Email
const sendEmail = async ({ subject, message, sendTo }) => {
    await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: sendTo,
        subject,
        html: `
        <h2>New Portfolio Contact Message</h2>
        <p>${message}</p>
        `
    })
};

module.exports = sendEmail;