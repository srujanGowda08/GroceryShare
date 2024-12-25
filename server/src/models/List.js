// server/src/models/List.js
const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  shared: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  items: [
    {
      name: String,
      quantity: Number,
      purchased: Boolean,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("List", ListSchema);
