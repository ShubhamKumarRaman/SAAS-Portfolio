const nodemailer = require('nodemailer')

const getTransporter = () => {
    const host = (process.env.EMAIL_HOST || '').trim();
    const port = Number.parseInt((process.env.EMAIL_PORT || '').trim(), 10);
    const user = (process.env.EMAIL_USER || '').trim();
    const pass = (process.env.EMAIL_PASS || '').trim();

    if (!host || !Number.isFinite(port) || !user || !pass) {
        throw new Error(
            'Email is not configured. Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS in src/.env'
        );
    }

    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
    });
};

//Send Email
const sendEmail = async ({ subject, message, sendTo }) => {
    const transporter = getTransporter();
    const from = (process.env.EMAIL_FROM || process.env.EMAIL_USER || '').trim();

    await transporter.sendMail({
        from,
        to: sendTo,
        subject,
        html: `
        <h2>New Portfolio Contact Message</h2>
        <p>${message}</p>
        `,
    });
};

module.exports = sendEmail;