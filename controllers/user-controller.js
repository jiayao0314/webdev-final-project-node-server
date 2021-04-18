const userService = require("../services/user-service");

    const register = (req, res) => {
        const newUser = req.body;
        userService.register(newUser)
            .then(actualUser => {
                req.session['currentUser'] = actualUser;
                res.send(actualUser);
            })
            .catch(() => {
                res.status(400).send('Invalid username, might be duplicated');
            });
    }

    const login = (req, res) => {
        const user = req.body;
        userService.findUserByCredentials(user.username, user.password)
            .then((actualUser) => {
            if(actualUser) {
                req.session["currentUser"] = actualUser
                res.send(actualUser)
            } else {
                res.send(403)
            }
        })
    }


    const logout = (req, res) => {
        delete req.session;
        res.send("user logout");
        res.redirect('/')
    }

    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)