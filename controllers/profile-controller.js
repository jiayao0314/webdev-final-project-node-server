module.exports = (app) => {
    const profileService = require("../services/profile-service")

    const findAllProfiles = (req, res) => {
        const currentUser = req.session['currentUser']
        if(currentUser.role === 'ADMIN') {
            profileService.findAllProfiles()
                .then((profiles) => {
                    res.send(profiles);
                })
        } else {
            res.send("not admin, can not findAllProfiles!");
        }
    }

    const findProfileByUserId = (req, res) => {
        const currentUser = req.session['currentUser']
        const targetId = req.params['uid']
        if(currentUser._id === targetId) {
            profileService.findProfileByUserId(targetId)
                .then((profile) => {
                    res.send(profile)
                })
        } else {
            res.send("user can only find his/her own profile!");
        }
    }

    const deleteProfile = (req, res) => {
        const currentUser = req.session['currentUser']
        const targetId = req.params['uid']
        if(currentUser.role === 'ADMIN') {
            profileService.deleteProfile(targetId)
                .then((profile) => {
                    res.sendStatus(200);
                })
        } else {
            res.send("not admin, can not deleteProfile!")
        }
    }

    const updateProfile = (req, res) => {
        const currentUser = req.session['currentUser']
        // const updatedUser = req.body
        const targetId = req.params['uid']
        if(currentUser._id === targetId) {
            profileService.updateProfile(currentUser._id, req.body)
                .then((profile) => {
                    res.send(profile)
                    req.session['currentUser'] = req.body
                    req.session.save()
                    console.log("succeeded")
                })
        } else {
            res.send("user can only update his/her profile!")
        }
    }

    app.get("/api/profile", findAllProfiles)
    app.get("/api/profile/:uid", findProfileByUserId)
    app.delete("/api/profile/:uid", deleteProfile)
    app.put("/api/profile/:uid", updateProfile)
}
