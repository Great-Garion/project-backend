const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataTransaksi = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "user",
  },
  product: {
    type: Types.ObjectId,
    ref: "product",
  },
  total_product: Number,
  total_price: Number,
});

const transaksi = mongoose.model("transaksi", dataTransaksi);

module.exports = transaksi;
