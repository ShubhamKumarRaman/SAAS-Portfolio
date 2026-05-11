const Skill = require('../models/Skill')

//Create Skill
const createSkill = async (req, res) => {
    try {
        const skill = await Skill.create(req.body);

        res.status(201).json({
            success: true,
            message: "Skill created successfully",
            data: skill
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Get all Skills
const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find().sort({
            createdAt: -1
        })

        res.json({
            success: true,
            count: skills.length,
            data: skills
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Update skill
const updateSkill = async (req, res) => {
    try {
        const skill = await Skill.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            })
        }

        res.json({
            success: true,
            message: "Skill updated",
            data: skill,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Delete Skill
const deleteSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            })
        }

        await skill.deleteOne();

        res.json({
            success: true,
            message: "Skill Deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createSkill, 
    getSkills, 
    updateSkill, 
    deleteSkill,
}