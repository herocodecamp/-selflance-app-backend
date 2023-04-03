const mongoose = require("mongoose");
const { Schema } = mongoose;

const BuyerOrderProcessSchema = new Schema(
  {
    sellerAgreement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sellerAgreement",
      required: [true, "seller agreement ref is required"],
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "buyer ref is required"],
    },
    payment_method: {
      type: Array,
      default: [],
      required: [true, "payment method is required"],
    },
    isAgree: {
      type: Boolean,
      required: [true, "turn on the agree button"],
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BuyerOrderProcess", BuyerOrderProcessSchema);
