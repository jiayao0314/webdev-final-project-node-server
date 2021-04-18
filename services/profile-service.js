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

const updateProfile = (uid, profile) => {
    return userModel.findByIdAndUpdate(
        uid,
{
            $set: {
                firstName: profile.firstName,
                lastName: profile.lastName,
                password: profile.password,
                avatar: profile.avatar,
                phone: profile.phone,
                address: profile.address,
                email: profile.email,
                about: profile.about
            }
        },
        {
            upsert: true
        }
        )
}

module.exports = {
    findAllProfiles, findProfileByUserId, deleteProfile, updateProfile
}
