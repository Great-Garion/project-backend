const mongoose = require("mongoose");
const { Schema } = mongoose

const dataUser = new Schema ({
    fullname: String,
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean,
})

const users = mongoose.model("users", dataUser);

module.exports = users;