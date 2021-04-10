module.exports = (app) => {
    const userModel = require("../database/user/user-model")

    const register = (req, res) => {
        const user = req.body;
        // TODO: move this to a service file
        userModel.create(user)
            .then((actualUser) => {
                req.session['currentUser'] = actualUser
                res.send(actualUser)
            })
    }
    const login = (req, res) => {
        const user = req.body;
        userModel.find({
            username: user.username,
            password: user.password
        }).then((actualUser) => {
            if(actualUser) {
                req.session["currentUser"] = actualUser
                res.send(actualUser)
            } else {
                res.send(403)
            }
        })
    }
    const logout = (req, res) => {
        req.session
    }
    const profile = (req, res) => {
        const currentUser = req.session["currentUser"]
        if(currentUser) {
            res.send(currentUser)
        } else {
            res.send(403)
        }
    }

    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)
    app.post("/api/profile", profile)
}