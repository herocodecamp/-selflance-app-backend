const mongoose = require("mongoose");
const { Schema } = mongoose;

const SellerOfferSchema  = new Schema(
  {
    // _id: default object id
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "service",
      required: [true, "service ref is required"],
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "seller ref is required"],
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "buyer ref is required"],
    },

    description: {
      type: String,
      minlength: 5,
      maxlength: 5000,
      default: "",
    },
    total_price: {
      type: Number,
      required: [true, "enter the price"],
      min: 1,
    },

    revision: {
      type: Number,
      required: true,
    },
    delivery_time: {
      type: Number,
      required: true,
    },
    additional_option: String,

    isAgree: {
      type: Boolean,
      required: [true, "turn on the agree button"],
      default: false,
    },
    expiry_time: Number,
  },

  { timestamps: true }
);

module.exports = mongoose.model("SellerOffer", SellerOfferSchema);
