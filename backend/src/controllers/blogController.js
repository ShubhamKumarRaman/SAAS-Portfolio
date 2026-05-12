const Blog = require('../models/Blog')

//Create Blog
const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);

        res.status(201).json({
            success: true,
            message: "Blog created successfylly",
            data: blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}