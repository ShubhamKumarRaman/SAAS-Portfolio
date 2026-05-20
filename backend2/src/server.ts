import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

const app = express();

//Security & Rate Limiting Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

//Health Check Route
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV
    })
})

//Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(`MongoDB connected successfully`);
        process.exit(1);
    }
}

//Start Server
const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}| ${process.env.NODE_ENV} mode`)
    })
}

startServer();

//Graceful shutdown
process.on('SIGTERM', () => {
    console.log("SIGTERM received. closing server....")
    process.exit(0);
})