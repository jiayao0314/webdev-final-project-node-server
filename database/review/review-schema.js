const mongoose = require("mongoose")
const reviewSchema = mongoose.Schema({
    userId: [{
        _id: String,
        ref: 'userModel'
    }],
    recipeId: String,
    text: String,
    // likeCount: Number
}, {collection: "reviews"})

module.exports = reviewSchema
