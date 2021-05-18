const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/login",async(req,res)=>{
    try{
        const data = await User.findOne({username:req.body.username});
        console.log(data);
        if(!data){
            res.sendStatus(204);
        }
        else{
            const passwordMatch= await bcrypt.compare(req.body.password,data.password);
            console.log(`body password`,req.body.password)
            console.log(`datbase pass`,data.password);
            if(passwordMatch){
                res.send(`login success`);
            }
            else{
                res.send(`login failure.`);
            }
        }
    }catch(e){
        console.log(res.status(400).send("Error while finding tha data"));
    }
});

module.exports= router;