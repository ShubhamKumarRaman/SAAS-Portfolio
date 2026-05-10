const User = require('../models/User')
const generateToken = require('../utils/generateToken')

//Register User
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

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
            name, email, password
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
        res.status(500);
        throw new Error(error.message);
    }
}

//Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Find user
        const user = await User.findOne({ email });

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
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}

//Get profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            res.status(404);
            throw new Error("User not found");
        }

        res.json({
            success: true,
            data: user,
        })
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}

module.exports = { registerUser, loginUser, getUserProfile };