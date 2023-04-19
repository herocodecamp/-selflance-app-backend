const express = require("express");
const { withdrawController } = require("../controllers/withdraw.controller");
const Router = express.Router();

Router.post("/:id", withdrawController);

module.exports = Router;
