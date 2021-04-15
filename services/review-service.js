
const reviewModel = require("../database/review/review-model")

const findAllReviews = () => {
    return reviewModel.find().exec()
}

const findReviewsByRecipeId = (recipeId) => {
    return reviewModel.findById(recipeId).exec()
}

module.exports = {
    findAllReviews, findReviewsByRecipeId
}
