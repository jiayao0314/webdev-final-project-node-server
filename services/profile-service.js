const profileModel = require("../database/profile/profile-model")

const findAllProfiles = () => {
    return profileModel.find()
}

const findProfileByUserId = (uid) => {
    return profileModel.findById(uid).exec()
}

const deleteProfile = (uid) => {
    return profileModel.deleteOne({_id: uid})
}

const updateProfile = (uid, profile) => {
    return profileModel.findOneAndUpdate(
        {_id: uid},
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
