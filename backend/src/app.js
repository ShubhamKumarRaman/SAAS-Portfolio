const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes')
const skillRoutes = require('./routes/skillRoutes')
const resumeRoutes = require('./routes/resumeRoutes');
const contactRoutes = require('./routes/contactRoutes')
const blogRoutes = require('./routes/blogRoutes');

const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config();

const app = express();

//security middlware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})

app.use(limiter);

//Cors
app.use(cors({
    origin: "*",
    credentials: true
}));

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser
app.use(cookieParser());

//logger
app.use(morgan("dev"));

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);

//test Route
app.get('/', (req, res) => {
    res.json({
        message: "API running successfully"
    })
})

//Error Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;