const express = require("express");
const router = express.Router();
const User = require("../models/user");

//Register Router

router.post("/user",async(req,res)=>{
    try{
        const userdata = new User(req.body);
        const data = await userdata.save();
        console.log(data);
        res.status(201).send(data);
    }catch(e){
        console.log(res.status(400).send("failed to store  in database."));
    }
});



module.exports = router;
