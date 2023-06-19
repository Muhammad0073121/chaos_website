const mongoose = require('mongoose');

const userprofileSchema = new mongoose.Schema({
    Username: {type:"String", required: true},
    Password: {type:"String", required: true},
    Email: {type:"String", required: true},
    FullName: {type:"String", required: true},
})

const Userprofile = mongoose.model("user", userprofileSchema);

module.exports = Userprofile
