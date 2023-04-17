const BuyerOrderProcess = require("../models/BuyerOrderProcess");
const SellerOffer = require("../models/SellerOffer");

exports.buyerOrderProcessController = async (req, res) => {
  try {
    const newOrder = new BuyerOrderProcess(req.body);
    await newOrder.save();
    res.status(200).json({ message: "successfully insert an Order" });
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};

exports.GetBuyerOrderData = async (req, res) => {
  try {
    const findOffer = await BuyerOrderProcess.findById(req.params.id);
    res.status(200).json(findOffer);
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};

exports.deleteOrderController = async (req, res) => {
  try {
    const deleteOrder = await BuyerOrderProcess.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json("successfully delete a order");
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};
