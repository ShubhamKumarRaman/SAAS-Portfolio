const Project = require('../models/Project')

//Create Project
const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: project,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Get all projects
const getProjects = async (req, res) => {
    try {
        //Pagination
        const page = Math.max(Number(req.query.page) || 1, 1);
        const limit = Math.max(Number(req.query.limit) || 6, 1);

        const skip = (page - 1) * limit;

        //Search
        const keyword = req.query.search ? {
            title: {
                $regex: req.query.search,
                $options: "i",
            }
        } : {};

        //Filtering
        const featuredFilter = req.query.featured === "true"
            ? { featured: true }
            : {};

        const tagFilter = req.query.tag ? {
            tags: {
                $in: [req.query.tag],
            }
        } : {};

        //Sorting
        let sortOption = {};

        if (req.query.sort === "latest") {
            sortOption = { createdAt: -1 };
        }

        if (req.query.sort === "oldest") {
            sortOption = { createdAt: 1 };
        }

        if (req.query.sort === "title") {
            sortOption = { title: 1 }
        }

        // Query
        const projects = await Project.find({
            ...keyword,
            ...featuredFilter,
            ...tagFilter
        })
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        //Count
        const totalProjects = await Project.countDocuments({
            ...keyword,
            ...featuredFilter,
            ...tagFilter
        });

        res.json({
            success: true,
            currentPage: page,
            totalPages: Math.ceil(totalProjects / limit),
            totalProjects,
            count: projects.length,
            data: projects,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Get single project
const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            res.status(404).json({
                success: false,
                message: "Project not found"
            })
        }

        res.json({
            success: true,
            data: project,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
