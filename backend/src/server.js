const path = require('path');
const dotenv = require('dotenv');

// Load env vars from this folder (backend/src/.env)
dotenv.config({ path: path.resolve(__dirname, '.env') });

const connectDB = require('./config/db');
const app = require('./app');

//Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})