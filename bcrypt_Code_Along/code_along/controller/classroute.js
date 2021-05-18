const express = require("express");
const router = express.Router();

//importing model clases
const User = require("../models/user");
const ClassRoom  = require("../models/classRoom");

router.post("/create/",async(req,res)=>{
   try{
    const classroom = new ClassRoom(req.body)
    const data = await classroom.save();
    res.status(201).send(data);
   }catch(e){
       res.status(400).send("failed to store in db");
   }
});

router.post("/map/:id/:grade", async(req,res)=>{
    try{
        let usr,clas;
        const data = await User.findOne({username:req.params.id});
        usr = new User(data);
        const data2=await ClassRoom.findOne({grade:req.params.grade})
        clas = new ClassRoom(data2);
        clas.ClassRoom.push(usr);
        const data1=await clas.save();
        
    }catch(e){
        res.status(400).send("error while storing data");
    }
});

module.exports=router;