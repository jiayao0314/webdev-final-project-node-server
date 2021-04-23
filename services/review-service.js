
const reviewModel = require("../database/review/review-model")

const findAllReviews = () => {
    return reviewModel.find().exec()
}

const findReviewsByRecipe = (recipeId) => {
    return reviewModel.find({recipeId: recipeId}).populate("users").exec()
}

const createReviewForRecipe = (recipeId, review, username) => {
    // return reviewModel.create({recipeId: recipeId, text: review.text, userId: review.user})
    return reviewModel.create({recipeId, text: review.review.text, username})
}

const findReviewById = (reviewId) => {
    return reviewModel.findById(reviewId)
}

module.exports = {
    findAllReviews, findReviewsByRecipe, createReviewForRecipe, findReviewById
}


