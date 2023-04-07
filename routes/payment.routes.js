const express = require("express");
const { stripePaymentController, papalPaymentController, razorpayPaymentController } = require("../controllers/Payments.controller");
const Router = express.Router();

Router.post('/stripe', stripePaymentController)
Router.post('/paypal', papalPaymentController)
Router.post('/razorpay', razorpayPaymentController)
module.exports = Router;
