module.exports = (app) => {
    const userService = require("../services/user-service");

    const register = (req, res) => {
        const credentials = req.body;
        userService.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser.length > 0) {
                    res.send("0")
                } else {
                    userService.register(credentials)
                        .then((newUser) => {
                            req.session['profile'] = newUser
                            res.send(newUser)
                        })
                }
            })
    }

    const login = (req, res) => {
        const user = req.body;
        userService.findUserByCredentials(user.username, user.password)
            .then((actualUser) => {
                if (actualUser) {
                    req.session["currentUser"] = actualUser
                    res.send(actualUser)
                } else {
                    res.send("username and password not match")
                }
            })
    }

    // TODO: session not delete from the db
    const logout = (req, res) => {
        delete req.session;
        res.send("user logout");
    }

    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)
}