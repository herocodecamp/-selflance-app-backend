const mongoose = require("mongoose");
const { Schema } = mongoose;

const BuyerOrderProcessSchema = new Schema(
  {
    gigId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gig",
    },
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    payment_method: {
      type: String,
      default: "",
    },
    image: {
      type: Array,
      default: [],
    },
    // cardNumber: Number,
    // date: Number,
    // firstName: String,
    // LastName: String,
    // deliveryDuration: String,
    // packageName: String,
    // pages: String,
    // price: String,
    // revisions: String,
    // sourceFile: Boolean,
    // summary: String,

    isAgree: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BuyerOrderProcess", BuyerOrderProcessSchema);
