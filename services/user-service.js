const usersModel = require("../database/user/user-model")
/*
    const findAllUsers = () => {
        return usersModel.find()
    }

    const findUserById = (uid) => {
        return usersModel.findById(uid).populate("users").exec()
    }

 */

    const register = (user) =>
    {
        return usersModel.create([
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    password: user.password,
                    phone: user.phone,
                    address: user.address,
                    email: user.email,
                }
            ]
            )
    }

    module.exports = {
        register,
    }