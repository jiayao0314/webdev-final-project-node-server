module.exports = (app) => {
    const profileService = require("../services/profile-service")

    const findAllProfiles = (req, res) => {
        profileService.findAllProfiles()
            .then((profiles) => {
                res.send(profiles)
            })
    }

    const findProfileByUserId = (req, res) => {
        const userId = req.params['uid']
        profileService.findProfileByUserId(userId)
            .then((profile) => {
                res.send(profile)
            })
    }

    const deleteProfile = (req, res) => {
        const userId = req.params['uid']
        profileService.deleteProfile(userId)
            .then((profile) => {
                res.send(profile)
            })
    }

    const updateProfile = (req, res) => {
        console.log(req.body)
        profileService.updateProfile(req.params['uid'], req.body, { useFindAndModify: false })
            .then((profile) => {
                res.send(profile)
                console.log("succeeded")
            })
    }

    app.get("/api/profile", findAllProfiles)
    app.get("/api/profile/:uid", findProfileByUserId)
    app.delete("/api/profile/:uid", deleteProfile)
    app.put("/api/profile/:uid", updateProfile)
}