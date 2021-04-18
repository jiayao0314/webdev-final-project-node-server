const mongoose = require("mongoose")
const Schema = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin']
    },
    phone: String,
    address: String,
    email: String,
    avatar: String,
    about: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'reviewModel'
    }],
}, {collection: "users", timestamps: true})

module.exports = userSchema