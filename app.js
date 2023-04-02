const express = require("express");
const app = express();
const appRouter = require("./routes");

app.use(express.json())

// //api version control
app.use("/api/v1", appRouter);


module.exports = app;