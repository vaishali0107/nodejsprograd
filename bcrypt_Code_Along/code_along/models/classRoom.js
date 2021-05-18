const mongoose = require("mongoose");
const User = require("./user");

const classRoomShema = new mongoose.Schema({
    grade:String,
    section:String,
    user:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}]
});

const ClassRoom = new mongoose.model("ClassRoom",classRoomShema);

module.exports=ClassRoom;

