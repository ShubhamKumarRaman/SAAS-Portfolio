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

//Update Blog
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }

        //Update Fields
        blog.title = req.body.title || blog.title;
        blog.content = req.body.content || blog.content;
        blog.coverImage = req.body.coverImage || blog.coverImage;
        blog.tags = req.body.tags || blog.tags;

        if (typeof req.body.published !== "undefined") {
            blog.published = req.body.published;
        }

        const updatedBlog = await blog.save();

        res.json({
            success: true,
            message: "Blog updated successfully",
            data: updatedBlog,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

//Delete Blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }

        await blog.deleteOne();

        res.json({
            success: true,
            message: "Blog deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Publish/unpublish blog
const togglePublishBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }

        blog.published = !blog.published;

        await blog.save();

        res.json({
            success: true,
            message: blogPublished ? "Blog Published" : "Blog unpublished",
            data: blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlogBySlug,
    updateBlog,
    deleteBlog,
    togglePublishBlog
}