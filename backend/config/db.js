const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Aap yahan apna MongoDB Atlas connection string daal sakte hain
        await mongoose.connect('mongodb://127.0.0.1:27017/zoho_clone');
        console.log("✅ MongoDB Connected Successfully!");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;