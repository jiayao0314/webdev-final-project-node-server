const profileModel = require("../database/profile/profile-model")

const findAllProfiles = () => {
    return profileModel.find()
}

// TODO: switch collections, not "users"?
const findProfileByUserId = (uid) => {
    return profileModel.findById(uid).populate("users").exec()
}

// TODO: not sure about the uid and _id here
const createProfile = (uid, profile) =>
    profileModel.create({
        _id: uid,
        firstName: profile.firstName,
        lastName: profile.lastName
    })


module.exports = {
    findAllProfiles, findProfileByUserId, createProfile
}
