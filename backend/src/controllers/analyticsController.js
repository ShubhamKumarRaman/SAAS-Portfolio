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

//DashBoard stats
const getDashboardStats = async (req, res) => {
    try {
        const totalProjects = await Project.countDocuments();

        const totalBlogs = await Blog.countDocuments();

        const totalSkills = await Skill.countDocuments();

        const totalMessages = await Skill.countDocuments();

        const totalVisitors = await Analytics.countDocuments();

        const featuredProjects = await Project.countDocuments({
            featured: true
        });

        const publishedBlogs = await Blog.countDocuments({ published: true });

        const unreadMessages = await Message.countDocuments({ status: "unread" })

        res.json({
            success: true,
            data: {
                totalProjects,
                totalBlogs,
                totalSkills,
                totalMessages,
                totalVisitors,
                totalVisitors,
                featuredProjects,
                publishedBlogs,
                unreadMessages
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};