const userDao = require("../daos/users-dao")

module.exports = (app) => {

    const register = (req, res) => {
        const credentials = req.body;
        userDao.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser.length > 0) {
                    res.send("0")
                } else {
                    userDao.createUser(credentials)
                        .then((newUser) => {
                            req.session['profile'] = newUser
                            res.send(newUser)
                        })
                }
            })
    }

    const login = (req, res) => {
        const credentials = req.body;
        userDao.findUserByCredentials(credentials)
            .then((actualUser) => {
                if(actualUser) {
                    req.session['profile'] = actualUser
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }

    app.post("/api/register", register);
    app.post("/api/login", login);

    // const userService = require("../services/user-service")
/*
    const register = (req, res) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const password = req.body.password;
        const address = req.body.address;
        const email = req.body.email;
        const phone = req.body.phone;
        const user ={
            firstName: firstName,
            lastName: lastName,
            password: password,
            address: address,
            email: email,
            phone: phone,
        };
        // TODO: move this to a service file
        userService.register(user)
            .then((user) => {
                res.send(user)
            })
    }

 */
}