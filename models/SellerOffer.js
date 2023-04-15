const mongoose = require("mongoose");
const { Schema } = mongoose;

const SellerOfferSchema = new Schema(
  {
    // _id: default object id
    offerId: {
      type: mongoose.Schema.Types.ObjectId,
      default: function() {
        return this._id;
      }
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "service",
      // required: [true, "service ref is required"],
    },
    sellerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: [true, "seller ref is required"],
    },
    buyerID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      // required: [true, "buyer ref is required"],
    },

    description: {
      type: String,
      minlength: 5,
      maxlength: 5000,
      default: "",
    },
    price: {
      type: Number,
      required: [true, "enter the price"],
      min: 1,
    },

    revision: {
      type: String,
      required: true,
    },
    delivery_time: {
      type: String,
      required: true,
    },
    additional: String,

    isAgree: {
      type: Boolean,
      required: [true, "turn on the agree button"],
      default: false,
    },
    expiry: String,
  },

  { timestamps: true }
);

module.exports = mongoose.model("SellerOffer", SellerOfferSchema);
