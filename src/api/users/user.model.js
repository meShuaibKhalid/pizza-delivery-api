const mongoose = require("mongoose");
// Define a schema
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  role: { type: String, required: true },
  address: { type: String, required: true },
  other: { type: String, required: false },
  password: { type: String, required: true },
});
module.exports = mongoose.model("Customer", customerSchema);
