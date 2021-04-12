const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    avatar: String,
    phone: String,
    address: String,
    email: String,
    about: String
}, {collection: "users", timestamps: true})

module.exports = userSchema