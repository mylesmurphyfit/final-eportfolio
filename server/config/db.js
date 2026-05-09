const mongoose = require('mongoose');

// Get the connection string and port from the environment variables.
const dbUrl = process.env.MONGODB_URI;

/**
 * Connect to MongoDB using the connection string from the environment variables.
 * Uses Mongoose to connect to the database.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
