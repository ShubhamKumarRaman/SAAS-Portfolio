const cloudinary = require('../config/cloudinary')

const Resume = require('../models/Resume')

//Upload Resume
const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Resume file required"
            })
        }

        //Delete old resume if exists
        const existingResume = await Resume.findOne();

        if (existingResume) {
            await cloudinary.uploader.destroy(
                existingResume.public_id,
                {
                    resource_type: "raw"
                }
            )
            await existingResume.deleteOne();
        }

        //Upload new resume
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "portfolio-resume",
                resource_type: "raw"
            }
        )

        //Save DB
        const resume = await Resume.create({
            url: result.secure_url,
            public_id: result.public_id
        })

        res.status(201).json({
            success: true,
            message: "Resume uploaded successfully",
            data: resume
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { uploadResume };