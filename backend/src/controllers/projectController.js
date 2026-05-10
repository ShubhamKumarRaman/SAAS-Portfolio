const Project = require('../models/Project')

//Create Project
const createProject = async(req,res)=>{
    try {
        const project = await Project.create(req.body);

        res.status(201).json({
            success:true, 
            message:"Project created successfully", 
            data:project,
        })
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}