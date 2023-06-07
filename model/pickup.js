const mongoose = require("mongoose");

const pickupSchema = new mongoose.Schema({
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
    logdetails: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    }
});

//collection
const pickup = new mongoose.model("pickup", pickupSchema);
module.exports = pickup;