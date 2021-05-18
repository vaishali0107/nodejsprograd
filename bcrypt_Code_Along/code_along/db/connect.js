const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://system:root@cluster0.goc2f.mongodb.net/bcrypt?retryWrites=true&w=majority",{
    useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch((err)=>{console.log("No connection")});


