const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  collectionId: {
    type: Schema.Types.ObjectId,
    ref: "Collection",
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  winner: { type: Schema.Types.ObjectId, ref: "Item", required: true },
});

module.exports = mongoose.model("March", MatchSchema);
