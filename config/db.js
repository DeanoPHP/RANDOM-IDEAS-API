const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
}

// this stops showing some error ???
mongoose.set('strictQuery', true);

module.exports = connectDB; 