const mongoose = require('mongoose');


const sustainSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    totalEmission : {
        type : Number,
        required : true
    },
    totalOffset : {
        type : Number,
        required : true
    },
    totalSustain : {
        type : Number,
        required : true
    },
},{timestamps : true});

module.exports = mongoose.model('sustain',sustainSchema);