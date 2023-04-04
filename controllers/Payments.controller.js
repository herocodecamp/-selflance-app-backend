const dotenv = require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.stripePaymentController = async (req, res) => {
  const { price, source, currency } = req.body;

  const amount = price * 100;
  
  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
    });

    console.log(charge);

    res.status(200).json({
      message: "Payment processed successfully",
      charge,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      type: error.name,
    });
  }
};
