const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    phone: String,
    address: String,
    email: String,
    role: {type: String, enum: ['ADMIN', 'USER']},
}, {collection: "users"})

module.exports = userSchema