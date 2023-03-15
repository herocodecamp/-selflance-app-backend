// external imports
const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 8000;
const cors = require('cors');

// internal imports
const app = require('./app');
const ErrorHandler = require('./middleware/errorHandler');
const dbConnection = require('./db/dbConnection');

// app configuration
dotenv.config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
dbConnection()


// middleware
ErrorHandler()

// server listening
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})