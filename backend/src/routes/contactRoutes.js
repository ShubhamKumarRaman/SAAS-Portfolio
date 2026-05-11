const express = require('express')

const {
    createContactMessage,
    getMessages,
    deleteMessage,
    markAsRead,
} = require('../controllers/contactController');

const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

//public route
router.post('/', createContactMessage);

//Admin Routes
router.get(
    '/message',
    protect,
    adminOnly,
    getMessages
);

router.put(
    '/messages/:id/read',
    protect,
    adminOnly,
    markAsRead
);

router.delete(
    '/messages/:id',
    protect,
    adminOnly,
    deleteMessage
);

module.exports = router;