const express = require('express')

const { registerUser, loginUser, getUserProfile } = require('../controllers/authController')

const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

//Register
router.post('/register', registerUser);

//Login
router.post('/login', loginUser);

//Profile
router.get('/profile', protect, getUserProfile);

router.get('/admin-dashboard', protect, adminOnly, (req, res) => {
    res.json({
        success: true,
        message: "Welcome Admin"
    })
})
module.exports = router;