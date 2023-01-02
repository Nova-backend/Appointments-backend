const mongoose = require("mongoose");

const Payment = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  stripeToken: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required:true,
  }
});
module.exports.Payment = mongoose.model("payment", Payment);
