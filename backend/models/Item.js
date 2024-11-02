const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  winRate: { type: Number, default: 0 },
});

module.exports = mongoose.model("Item", itemSchema);
