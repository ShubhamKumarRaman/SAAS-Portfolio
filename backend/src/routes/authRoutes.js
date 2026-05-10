const express = require('express')

const { registerUser, loginUser, getUserProfile } = require('../controllers/authController')

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

//Register
router.post('/register', registerUser);

//Login
router.post('/login', loginUser);

//Profile
router.get('/profile', protect, getUserProfile);

module.exports = router;