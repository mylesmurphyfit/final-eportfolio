require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Import routers
const projectsRouter = require('./routes/projects');
const contactRouter = require('./routes/contact');

// Create the express app
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());

// Static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.use(projectsRouter);
app.use(contactRouter);

module.exports = app;
