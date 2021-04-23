const mongoose = require("mongoose")
const Schema = require("mongoose");

const reviewSchema = new mongoose.Schema({
    recipeId: String,
    text: String,
    userId: {type: Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: "reviews", timestamps: true})

module.exports = reviewSchema
