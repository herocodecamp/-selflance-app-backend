const express = require("express");
const { stripePaymentController, papalPaymentController } = require("../controllers/Payments.controller");
const Router = express.Router();

Router.post('/stripe', stripePaymentController)
Router.post('/paypal', papalPaymentController)
module.exports = Router;
