const Message = require('../models/Message')

const sendEmail = require('../services/emailService')

//Create contact message
const createContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body || {};

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'name, email, and message are required',
            });
        }

        //Save message
        const newMessage = await Message.create({ name, email, message });

        //Send Email Notification
        await sendEmail({
            subject: "New Portfolio Contact",
            sendTo: process.env.EMAIL_USER,
            message: `
            <strong>Name:</strong> ${name}<br/>
            <strong>Email:</strong> ${email}<br/>
            <strong>Message:</strong><br/>
            ${message}
            `
        })

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Get all Messages
const getMessages = async (req, res) => {
    try {
        const message = await Message.find().sort({ createdAt: -1 })

        res.json({
            success: true,
            count: message.length,
            data: message
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Delete Message
const deleteMessage = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);

        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Message not found"
            })
        }

        await message.deleteOne();

        res.json({
            success: true,
            message: "Message deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Mark message as read
const markAsRead = async (req, res) => {
    try {
        const message = await Message.findByIdAndUpdate(
            req.params.id,
            {
                status: "read"
            },
            { new: true }
        );

        if (!message) {
            return res.status(404).json({
                success: false,
                message: "Message not found"
            })
        }

        res.json({
            success: true,
            message: "Message marked as read",
            data: message
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
    createContactMessage,
    getMessages,
    deleteMessage,
    markAsRead,
}