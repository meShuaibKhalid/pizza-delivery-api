const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerId: { type: String, required: true },
  customerName: {type: String, required: true},
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      category: { type: String, required: false },
      price: { type: Number, required: true },
    },
  ],
  deliveryET: { type: String, required: false },
  deliveryAT: { type: String, required: false },
  address: { type: String, required: true },
  status: { type: String, required: false },
  price: { type: Number, required: true },
  comment: { type: String, required: false },
});

module.exports = mongoose.model("Order", orderSchema);
