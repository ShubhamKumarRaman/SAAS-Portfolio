const express = require('express')

const {
    createBlog,
    getBlogs,
    getBlogBySlug,
    updateBlog,
    deleteBlog,
    togglePublishBlog
} = require('../controllers/blogController');

const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

//Publish Routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

//Admin Routes
router.post(
    '/',
    protect,
    adminOnly,
    createBlog
);

router.put(
    '/:id',
    protect,
    adminOnly,
    updateBlog
);

router.delete(
    "/:id",
    protect,
    adminOnly,
    deleteBlog
)

router.patch(
    "/:id/publish",
    protect,
    adminOnly,
    togglePublishBlog
)

module.exports = router;