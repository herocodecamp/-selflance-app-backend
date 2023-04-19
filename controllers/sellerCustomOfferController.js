const SellerOffers = require("../models/SellerOffer");
const Users = require("../models/User");

exports.SellerCustomOffer = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);

  console.log("body:", req.body);

  try {
    if (user._id.toString() === req.params.id) {
      const NewAgreement = new SellerOffers(req.body);
      await NewAgreement.save();
      res.status(200).json({ message: " successfully insert an agreement " });
    } else {
      res
        .status(403)
        .json({ message: "authentication failed, you are not a valid user" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
    console.log("here was an error: ", error.message);
  }
};

exports.getSellerOfferController = async (req, res) => {
  try {
    const result = await SellerOffers.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};
