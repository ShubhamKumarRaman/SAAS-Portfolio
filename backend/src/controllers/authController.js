const User = require('../models/User')
const generateToken = require('../utils/generateToken')

//Register User
const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required."
            })
        }

        //Check existing user
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists."
            })
        }

        //Create user
        const user = await User.create({
            name, email, password, role
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            }
        })
    } catch (error) {
        next(error);
    }
}

//Login User
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required."
            })
        }

        //Find user
        const user = await User.findOne({ email }).select('+password');

        //Match password
        if (user && (await user.matchPassword(password))) {
            res.json({
                success: true,
                message: "Login successful",
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token: generateToken(user._id)
                }
            })
        } else {
            res.status(401);
            return next(new Error("Invalid email or password"));
        }
    } catch (error) {
        next(error);
    }
}

//Get profile
const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            res.status(404);
            return next(new Error("User not found"));
        }

        res.json({
            success: true,
            data: user,
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { registerUser, loginUser, getUserProfile };