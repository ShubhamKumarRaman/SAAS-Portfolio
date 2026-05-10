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

