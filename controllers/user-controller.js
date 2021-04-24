module.exports = (app) => {
    const userService = require("../services/user-service");

    const register = (req, res) => {
        const credentials = req.body;
        userService.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser.length > 0) {
                    res.send("0");
                } else {
                    userService.register(credentials)
                        .then((newUser) => {
                            req.session['profile'] = newUser;
                            res.json(newUser);
                        });
                }
            });
    }

    const login = (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        userService.findUserByCredentials(username, password)
            .then(user => {
                if (user) {
                    req.session['currentUser'] = user;
                    res.send(user);
                } else {
                    res.sendStatus(403);
                }
            });
    }

    const logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

    const findUser = (req, res) => {
        const currentUser = req.session['currentUser'];
        if (currentUser) {
            res.json(currentUser);
        } else {
            res.sendStatus(204);
        }
    }

    const findUserById = (req, res) => {
        const targetId = req.params['uid'];
        userService.findUserById(targetId)
            .then((user) => {
                res.send(user);
            })
            .catch(err => console.error(`user not login, findUserById error: ${err}`));
    }

    const findAllUsers = (req, res) => {
        userService.findAllUsers()
            .then((users) => {
                const currentUser = req.session['currentUser'];
                console.log("currentUser" + currentUser)
                console.log("currentUser.role" + currentUser.role)
                if(currentUser && currentUser.role === "ADMIN") {
                    // res.json(users);
                    res.set({'Access-Control-Allow-Origin': `${process.env.ALLOW_ORIGIN}`})
                        .send(users)
                } else {
                    res.sendStatus(400);
                }
            });
    }

    const deleteUserById = (req, res) => {
        const currentUser = req.session['currentUser'];
        const targetId = req.params['uid'];
        if(currentUser.role === 'ADMIN') {
            userService.deleteUser(targetId)
                .then((profile) => {
                    res.json("delete user: " + targetId);
                });
        } else {
            // res.send("not admin, can not deleteProfile!")
            res.sendStatus(400);
        }
    }

    const updateUser = (req, res) => {
        const currentUser = req.session['currentUser'];
        const updatedUser = req.body;
        if(currentUser._id === updatedUser._id) {
            userService.updateUser(updatedUser)
                .then((newUser) => {
                    res.json("update user: " + updatedUser._id);
                    req.session['currentUser'] = updatedUser;
                    req.session.save();
                });
        } else {
            res.sendStatus(400);
        }
    }

    app.post("/api/register", register);
    app.post("/api/login", login);
    app.post("/api/logout", logout);

    // "/profile" for all users, /profiles for admin
    app.get("/api/profile", findUser);
    app.get("/api/profiles/:uid", findUserById);
    app.get("/api/profiles", findAllUsers);
    app.delete("/api/profiles/:uid", deleteUserById);
    app.put("/api/profile", updateUser);
}