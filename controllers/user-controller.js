module.exports = (app) => {
    const userService = require("../services/user-service")

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
    /*
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

     */

    app.post("/api/register", register)
    //app.post("/api/login", login)
    //app.post("/api/logout", logout)
    //app.post("/api/profile", profile)
}