const mongoose = require('mongoose');
const validator=require("validator");
const surveySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
    },
    gender: {
        type: String,
        enum:["Male","Female","Other"],
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    phone: {
        type: Number,
        required: true,
    },
    address:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    timestamp: { type: Date, default: Date.now }
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;