const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
    },
    avatar : {
        type : String,
    },
    gender : {
        type : String,
    },
    phoneNumber : {
        type : Number
    },
    dob : {
        type : Date,
    },
    country : {
        type : String,
    },
    education : {
        type : String,
    },
    city : {
        type : String,
    },
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
},{timestamps : true});

module.exports = mongoose.model('profiles',profileSchema);