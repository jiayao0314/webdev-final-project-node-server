const mongoose = require("mongoose")
const Schema = require("mongoose");

const reviewSchema = new mongoose.Schema({
    recipeId: String,
    text: String,
    // likeCount: Number
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
}, {collection: "reviews", timestamps: true})

module.exports = reviewSchema
