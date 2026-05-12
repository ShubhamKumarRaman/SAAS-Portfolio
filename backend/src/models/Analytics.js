const mongoose = require('mongoose')

const analyticsSchema = new mongoose.Schema(
    {
        page: {
            type: String,
            required: true,
        },
        views: {
            type: Number,
            default: 1,
        },
        visitorIP: {
            type: String,
        },
        userAgent: {
            type: String,
        },
        referrer: {
            type: String
        }
    }, { timestamps: true }
)

module.exports = mongoose.model("Analytics", analyticsSchema);