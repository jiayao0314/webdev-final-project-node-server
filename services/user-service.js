const usersModel = require("../database/user/user-model")

const register = (user) =>
{
    return usersModel.create([
            {
                userName: user.userName,
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

const findUserByCredentials = (username, password) => {
    return usersModel.findOne({username, password});
}

module.exports = {
    register, findUserByCredentials
}