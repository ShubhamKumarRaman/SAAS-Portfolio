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

//Get all Blogs 
const getBlogs = async (req, res) => {
    try {
        //Pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 6;
        const skip = (page - 1) * limit;

        //Search
        const keyword = req.query.search ?
            {
                title: {
                    $regex: req.query.search,
                    $options: "i"
                }
            }
            : {};

        //Publishd Filter
        const publishFilter = req.query.published === "true"
            ? { published: true }
            : {};

        // Tag Filter
        const tagFilter = req.query.tagFilter
            ? {
                tags: {
                    $in: [req.query.tag]
                }
            }
            : {};

        //Query
        const blogs = await Blog.find({
            ...keyword,
            ...publishFilter,
            ...tagFilter
        })
            .sort({
                createdAt: -1,
            })
            .skip(skip)
            .limit(limit);

        //Count
        const totalBlogs = await Blog.countDocuments({
            ...keyword,
            ...publishFilter,
            ...tagFilter,
        })

        res.json({
            success: true,
            currentPage: page,
            totalPages: Math.ceil(
                totalBlogs / limit
            ),
            totalBlogs,
            count: blogs.length,
            data: blogs
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

//Get Single Blog
const { getBlogBySlug } = async (req, res) => {
    try {
        const blog = await Blog.findOne({
            slug: req.params.slug
        });

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}