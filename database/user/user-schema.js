const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    phone: String,
    address: String,
    email: String,
}, {collection: "users"})

module.exports = userSchema