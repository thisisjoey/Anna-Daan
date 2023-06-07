const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
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
    message: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:false
    }
});

//collection
const contact = new mongoose.model("contact", contactSchema);
module.exports = contact;