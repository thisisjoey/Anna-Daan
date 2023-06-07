const mongoose = require("mongoose");

const regisSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phonenumber: {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    },
    helpchoice: {
        type:String,
        required:false
    },
    gender: {
        type:String,
        required:false
    }
});

//collection
const register = new mongoose.model("register", regisSchema);
module.exports = register;