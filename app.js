const express = require("express");
const app = express();
const appRouter = require("./routes");
const dotenv = require("dotenv");

app.use(express.json());
dotenv.config();

// //api version control
app.use("/api/v1", appRouter);

module.exports = app;
