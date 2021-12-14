const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataSeller = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "user",
  },
  rating_seller: Number,
});

const seller = mongoose.model("seller", dataSeller);

module.exports = seller;
