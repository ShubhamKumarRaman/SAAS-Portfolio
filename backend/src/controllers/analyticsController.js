const Analytics = require('../models/Analytics')
const Project = require('../models/Project')
const Blog = require('../models/Blog')
const Message = require('../models/Message')
const Skill = require('../models/Skill')

//Track Visitor
const trackVisitor = async (req, res) => {
    try {
        const { page } = req.body;

        await Analytics.create({
            page,
            visitorIP:
                req.headers["x-forwarded-for"] ||
                req.socket.remoteAddress,

            userAgent: req.headers["user-agent"],

            referrer: req.headers.referer || "direct",

        })

        res.status(201).json({
            success: true,
            message: "Visitor tracked"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}