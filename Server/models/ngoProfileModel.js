const mongoose = require('mongoose');

const ngoProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    avatar:{
        type: String
    },
    orgId : {
        type: String,
        ref : 'ngos'
    }
});

module.exports = mongoose.model('ngoProfile', ngoProfileSchema);