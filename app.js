const express = require("express");
const appRouter = require("./routes");
const app = express();

//api version control
app.use("/api/v1", appRouter);

module.exports = app;
