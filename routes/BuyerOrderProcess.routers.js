const express = require("express");
const { router } = require(".");
const { buyerOrderProcessController } = require("../controllers/buyerOrderProcess.Controller");
const Router = express.Router();

Router.post("/:id", buyerOrderProcessController);

module.exports = Router;
