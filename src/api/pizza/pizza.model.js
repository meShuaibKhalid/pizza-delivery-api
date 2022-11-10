const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, required: false },
  available: { type: Boolean, required: true },
  category: { type: String, required: false },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Pizza", pizzaSchema);
