const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataTransaksi = new Schema({
  consumer: {
    type: Types.ObjectId,
    ref: "consumer",
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
