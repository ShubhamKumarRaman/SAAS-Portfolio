const express = require('express')

const {
    trackVisitor,
    getDashboardStats,
    getAnalytics,
} = require('../controllers/analyticsController');

const { protect, adminOnly } = require('../middleware/authMiddleware')

const router = express.Router();

//Public Route
router.post('/track', trackVisitor);

//Admin Routes
router.get(
    "/stats",
    protect,
    adminOnly,
    getDashboardStats
);

router.get(
    '/analytics',
    protect,
    adminOnly,
    getAnalytics
);

module.exports = router;