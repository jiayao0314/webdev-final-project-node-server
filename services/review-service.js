
const reviewModel = require("../database/review/review-model")

const findAllReviews = () => {
    return reviewModel.find().exec()
}

const findReviewsByRecipe = (recipeId) => {
    return reviewModel.find({recipeId: recipeId}).exec()
}

const createReviewForRecipe = (recipeId, review) => {
    return reviewModel.create({recipeId: recipeId, text: review.text})
}

const findReviewById = (reviewId) => {
    return reviewModel.findById(reviewId)
}

module.exports = {
    findAllReviews, findReviewsByRecipe, createReviewForRecipe, findReviewById
}


