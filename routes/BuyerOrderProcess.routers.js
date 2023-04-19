const express = require("express");
const { router } = require(".");
const { buyerOrderProcessController, deleteOrderController, GetBuyerOrderData } = require("../controllers/buyerOrderProcess.Controller");
const Router = express.Router();

Router.post("/:id", buyerOrderProcessController);
Router.get("/buyer_order/:id", GetBuyerOrderData);
Router.delete("/buyer_order/:id", deleteOrderController)

module.exports = Router;
