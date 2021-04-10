const usersModel = require("../database/user/user-model")

const findAllUsers = () => {
    return usersModel.find()
}

const findUserById = (uid) => {
    return usersModel.findById(uid).populate("users").exec()
}

// const createUser = () => {}
// const deleteUser = () => {}

module.exports = {
    findAllUsers, findUserById
}
