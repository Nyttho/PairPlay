const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  numberOfTimesPlayed: { type: Number, default: 0 },
  gameElements: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Collection", collectionSchema);
