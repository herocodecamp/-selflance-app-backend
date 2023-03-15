const express = require('express');
// const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const app = require('./app');
const ErrorHandler = require('./middleware/errorHandler');
const dbConnection = require('./db/dbConnection');
const port = process.env.PORT || 8000;

dotenv.config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection()



ErrorHandler()

// server listening
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})