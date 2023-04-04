const BuyerOrderProcess = require("../models/BuyerOrderProcess");

exports.buyerOrderProcessController = async (req, res) => {
  try {
    const newOrder = new BuyerOrderProcess(req.body);
    await newOrder.save();
    res.status(200).json({ message: "successfully insert an Order" });
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};


