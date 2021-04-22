module.exports = (app) => {
    const reviewService = require("../services/review-service")

    const findAllReviews = (req, res) => {
        reviewService.findAllReviews()
            .then((reviews) => {
                res.send(reviews)
            })
    }

    const findReviewsByRecipe = (req, res) => {
        const recipeId = req.params['recipeId']
        reviewService.findReviewsByRecipe(recipeId)
            .then((reviews) => {
                res.send(reviews)
            })
    }

    const createReviewForRecipe = (req, res) => {
        reviewService.createReviewForRecipe(req.params.recipeId, req.body)
            .then((reviews) => {
                res.send(reviews)
            })
    }

    app.get("/api/reviews", findAllReviews)
    app.get("/api/reviews/:recipeId", findReviewsByRecipe)
    app.post("/api/reviews/:recipeId", createReviewForRecipe)
}

