const express = require('express');
const app = express();
const path = require("path");
require("./db/conn");

const port = process.env.port || 8000
const static_path = path.join(__dirname, "./");

const Register = require("./model/registration");
const Pickup = require("./model/pickup");
const Contact = require("./model/contact");

app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res) => {
    res.render("index");
});

app.post("/registered_submitted", async(req,res) => {
    try {
        const register = new Register({
            name:req.body.name,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
            age:req.body.age,
            helpchoice:req.body.choice,
            gender:req.body.gender
            });
            await register.save();
            res.sendFile(static_path+"requestsubmitted.html");    
        } catch (error) {
        res.send("error");
    }
});

app.post("/pickup_submitted", async(req,res) => {
    try {
        const pickup = new Pickup({
            name:req.body.name,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
            logdetails:req.body.logdetails,
            city:req.body.city,
            address:req.body.address
            });
            await pickup.save();
            res.sendFile(static_path+"requestsubmitted.html");    
        } catch (error) {
        res.send("error");
    }
});

app.post("/contact_submitted", async(req,res) => {
    try {
        const contact = new Contact({
            name:req.body.name,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
            message:req.body.message,
            gender:req.body.gender
            });
            await contact.save();
            res.sendFile(static_path+"requestsubmitted.html");    
        } catch (error) {
        res.send("error");
    }
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});