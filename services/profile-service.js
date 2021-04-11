const profileModel = require("../database/profile/profile-model")

const findAllProfiles = () => {
    return profileModel.find()
}

const findProfileByUserId = (uid) => {
    return profileModel.findById(uid).populate("users").exec()
}

module.exports = {
    findAllProfiles, findProfileByUserId
}
