const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String
}, {collection: "users"})

module.exports = userSchema