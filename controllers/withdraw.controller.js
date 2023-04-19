const withdraw = require("../models/withdraw");

exports.withdrawController = async (req, res) => {
  try {
    const newWithdraw = new withdraw(req.body);
    await newWithdraw.save();
    res.status(200).json("successfully inserted");
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};
