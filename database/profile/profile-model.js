const profileSchema = require("./profile-schema")
const mongoose = require("mongoose")
const profileModel = mongoose.model("ProfileModel", profileSchema)
module.exports = profileModel