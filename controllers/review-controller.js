module.exports = (app) => {
    const reviewService = require("../services/review-service")

    const findAllReviews = (req, res) => {
        reviewService.findAllReviews()
            .then((reviews) => {
                res.send(reviews)
            })
    }

    const findReviewsByRecipeId = (req, res) => {
        const recipeId = req.params['recipeId']
        reviewService.findReviewsByRecipeId(recipeId)
            .then((reviews) => {
                res.send(reviews)
            })
    }

    app.get("/api/reviews", findAllReviews)
    app.get("/api/reviews/:recipeId", findReviewsByRecipeId)
}
