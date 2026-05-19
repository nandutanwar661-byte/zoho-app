const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Database Connection call
connectDB();

// Middlewares (CORS setup custom frontend integration ke sath)
app.use(cors({
    origin: 'http://localhost:5173', // Aapke frontend ka exact URL
    credentials: true
}));
app.use(express.json());

// Console Logger setup taaki terminal me path dikhe
app.use((req, res, next) => {
    console.log(`📡 [${new Date().toLocaleTimeString()}] ${req.method} request received at: ${req.url}`);
    next();
});

// Main Registered Routes Setup
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/uploads', express.static('uploads'));
app.use('/api/estimates', require('./routes/estimateRoutes'));
app.use('/api/invoices', require('./routes/invoiceRoutes'));

// Root Fallback Route
app.get('/', (req, res) => {
    res.send('🚀 Zoho Clone Backend Server Running Perfectly.');
});

// Port activation setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running smoothly on port ${PORT}`);
});