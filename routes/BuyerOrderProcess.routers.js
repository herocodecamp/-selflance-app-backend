const express = require("express");
const { router } = require(".");
const { buyerOrderProcessController, GetSellerOfferData } = require("../controllers/buyerOrderProcess.Controller");
const Router = express.Router();

Router.post("/:id", buyerOrderProcessController);
Router.get("/sellerOffer/:id", GetSellerOfferData);

module.exports = Router;
