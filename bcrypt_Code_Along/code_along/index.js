const express = require("express");
var app = express();
const port = process.env.PORT || 3000;
require("./db/connect");
const userRouter = require("./controller/registerRoute")
const login = require("./controller/login");
const Class = require("./controller/classroute")
app.use(express.json());
app.use(userRouter);
app.use(login);
app.use("/class",Class);
app.listen(port,()=>{
    console.log(`server is running at ${port}.`)
});