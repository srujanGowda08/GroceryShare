// server/src/models/Item.js
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  purchased: { type: Boolean, default: false },
  list: { type: mongoose.Schema.Types.ObjectId, ref: "List" },
});

module.exports = mongoose.model("Item", ItemSchema);
