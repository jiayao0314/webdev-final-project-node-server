const userModel = require("../database/user/user-model")

const findAllProfiles = () => {
    return userModel.find()
}

const findProfileByUserId = (uid) => {
    return userModel.findById(uid).exec()
}

const deleteProfile = (uid) => {
    return userModel.deleteOne({_id: uid})
}

const updateProfile = (profile) => {
    return userModel.updateOne({_id: profile._id}, {set: profile});
}

module.exports = {
    findAllProfiles, findProfileByUserId, deleteProfile, updateProfile
}
