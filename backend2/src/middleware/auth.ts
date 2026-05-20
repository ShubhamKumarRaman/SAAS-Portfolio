import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import User from '../models/User'

interface AuthRequest extends Request {
    user?: any;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
    let token;
    if (req.headers.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided",
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Not authorized, token failed"
        })
    }
}

//Admin only middleware
export const adminOnly = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({
            message: "Admin access only"
        })
    }
}