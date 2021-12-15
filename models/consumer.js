const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataConsumer = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "user",
  },
});

const consumer = mongoose.model("consumer", dataConsumer);

module.exports = consumer;
