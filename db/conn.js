const mongoose = require('mongoose');

// DataBase Connection
mongoose.connect( "mongodb://localhost:27017/AnnaDaan", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log("Database Connected");
}).catch((e) => {
    console.log("Database Connectivity Error");
})