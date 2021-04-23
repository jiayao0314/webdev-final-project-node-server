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
        // reviewService.createReviewForRecipe(req.params.recipeId, req.body)
        //     .then((reviews) => {
        //         res.send(reviews)
        //     })
        const recipeId = req.params.recipeId;
        const review = req.body;
        // const userId = req.session.currentUser._id;
        const username = req.session.currentUser.username;
        // const username = req.body.username;
        reviewService.createReviewForRecipe(recipeId, review, username)
            .then(review => res.json(review));
    }

    const findReviewById = (req, res) => {
        const reviewId = req.params['reviewId']
        reviewService.findReviewById(reviewId)
            .then(review => {
                res.json(review)
            })
    }

    const deleteReview = (req, res) => {}

    const findReviewsByUserId = (req, res) => {
        // const currentUser = req.session.currentUser;
        const userId = req.params["uid"];
        reviewService.findReviewsByUserId(userId)
            .then(reviews => res.json(reviews))
    }

    app.get("/api/reviews", findAllReviews)
    app.get("/api/reviews/:recipeId", findReviewsByRecipe)
    app.post("/api/reviews/:recipeId", createReviewForRecipe)
    app.get('/api/internal/reviews/:reviewId', findReviewById)
    app.get("/api/reviews/:uid", findReviewsByUserId)
}

