const express = require('express')

const { uploadResume } = require('../controllers/resumeController');

const { protect, adminOnly } = require('../middleware/authMiddleware');

const upload = require('../middleware/uploadMiddleware')

const router = express.Router();

//Upload Resume
router.post(
    '/upload',
    protect,
    adminOnly,
    upload.single("resume"),
    uploadResume
)

module.exports = router;