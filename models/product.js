const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataProduct = new Schema({
  name: String,
  price: Number,
  description: String,
  seller: {
    type: Types.ObjectId,
    ref: "seller",
  },
});

const product = mongoose.model("product", dataProduct);

module.exports = product;
