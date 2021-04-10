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

    const createProfile = (req, res) => {
        profileService.createProfile(req.params._id, req.body)
            .then((profile) => {
                res.send(profile)
            })
    }

    app.get("/api/profile", findAllProfiles)
    app.get("/api/profile/:uid", findProfileByUserId)
    app.post("/api/profile/:uid", createProfile)
}