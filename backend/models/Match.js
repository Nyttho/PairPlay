const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  collectionId: { type: Number, required: true },
  userId: { type: Number, required: true },
  winner: { type: String, required: true },
});

module.exports = mongoose.model("March", MatchSchema);
