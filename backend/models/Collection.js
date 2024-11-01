const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  creatorId: { type: Number, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  numberOfTimesPlayed: { type: Number, required: true },
  gameElements: [
    {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
      winRate: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Collection", collectionSchema);
