const moongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new moongoose.Schema({
    userName:String,
    password:String,
    firstName:String,
    lastName:String,
    emailID:String,
    phoneNumber:Number,
    role:Number
});

schema.pre("save",async function(next){
    if(this.isModified("password")){
        console.log(`current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password,10);
        console.log(this.password);
    }
    next();
});

const User = new moongoose.model("User",schema);

module.exports = User;