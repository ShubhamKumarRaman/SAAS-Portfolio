import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import User, { IUser } from '../models/User'

const generateToken = (id: String) => {
    return jwt.sign({ id }, process.env.JWT_SECRET!), {
        expiresIn: process.env.JWT_EXPIRE || "7d",
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            })
        }

        const user = await User.create({
            name, email, password, role: 'admin',
        })

        const token = generateToken(user._id.toString());

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            token,
        })
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const token = generateToken(user._id.toString());

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            token,
        })
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getMe = async (req: Request, res: Response) => {
    try {
        const user = await User.findById((req as any).user.id).select('-password');
        res.json(user);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
}