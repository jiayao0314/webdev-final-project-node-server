const mongoose = require("mongoose")
const Schema = require("mongoose");

const reviewSchema = new mongoose.Schema({
    recipeId: String,
    text: String,
    // likeCount: Number
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'userModel'
    }],
}, {collection: "reviews", timestamps: true})

module.exports = reviewSchema
