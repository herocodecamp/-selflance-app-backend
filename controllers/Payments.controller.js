const dotenv = require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paypal = require("paypal-rest-sdk");
const Razorpay = require("razorpay");


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

// paypal

paypal.configure({
  mode: "sandbox",
  client_id: "client_id",
  client_secret: "client_secret",
});

exports.papalPaymentController = async (req, res) => {
  try {
    const { amount, currency, description } = req.body;

    const paymentRequest = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      transactions: [
        {
          amount: {
            total: amount,
            currency,
          },
          description,
        },
      ],
    };

    // Create a PayPal payment
    const createPayment = await new Promise((resolve, reject) => {
      paypal.payment.create(paymentRequest, (error, payment) => {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });

    res.status(200).json(createPayment);
  } catch (error) {
    res.status(500).json({ message: error.message, type: error.name });
  }
};


// razorpay
const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET",
});

exports.razorpayPaymentController = async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: amount * 100, // amount in paise
    currency: currency,
    receipt: "receipt_order_74394",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message, type: error.name });
  }
};
