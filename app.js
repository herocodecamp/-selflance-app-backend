const express = require("express");
const app = express();
const appRouter = require("./routes");
const dotenv = require("dotenv");

// app.use(cors())
// app.use(express.json())
// app.set("view engine", "ejs");


// //api version control
// app.use("/api/v1", appRouter);

module.exports = app;
