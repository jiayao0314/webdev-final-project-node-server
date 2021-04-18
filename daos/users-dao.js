const usersModel = require("../database/user/user-model")

const findUserByUsername = (username) => {
    // return usersModel.find({username: username})
    return usersModel.find({username})
}

const findUserByCredentials = (credentials) => {
    return usersModel.findOne({
        username: credentials.username,
        password: credentials.password,
    })
    // return usersModel.find({username})
}

const createUser = (user) => {
    return usersModel.create(user)
}

module.exports = {
    findUserByUsername,
    findUserByCredentials,
    createUser,
}