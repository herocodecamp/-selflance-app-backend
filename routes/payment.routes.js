const express = require("express");
const { stripePaymentController } = require("../controllers/Payments.controller");
const Router = express.Router();

Router.post('/stripe', stripePaymentController)
module.exports = Router;
