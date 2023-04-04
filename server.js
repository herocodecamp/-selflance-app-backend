// external imports
const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 8000;
const cors = require('cors');


// internal imports
const appRouter = require("./routes");
const app= require('./app')
const ErrorHandler = require('./middleware/errorHandler');
const dbConnection = require('./db/dbConnection');


// app configuration

// const app = express();
dotenv.config()
app.use(cors());
app.set("view engine", "ejs");
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/PrescriptionImages",express.static("./PrescriptionImages"));
app.use("/images", express.static("./images"));

// Database connection
dbConnection()


app.get('/', (req,res)=>{
res.send({message:true})
})

// server listening
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})



// api version control
app.use("/api/v1", appRouter);

// middleware
ErrorHandler()


