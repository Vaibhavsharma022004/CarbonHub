const mongoose = require('mongoose');

const emssionSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    totalEmission : {
        type : Number,
        required : true
    },
},{timestamps : true});

module.exports = mongoose.model('emssion',emssionSchema);