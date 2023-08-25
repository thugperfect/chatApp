require("dotenv").config()
const { log } = require("console")
const express = require("express")
const mongoose = require("mongoose")
const app = express()

const http = require("http").createServer(app)
const path = require('path')

const port = process.env.PORT || 8001 
const io = require("socket.io")(http)
app.use(express.static("./res"))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./res/index.html'))
})

io.on('connection',socket=>{
    console.log("Online");
    console.log(socket.id);

    socket.on('disconnect',()=>{
        console.log("Ofline");
    })
    socket.on("message",(msg)=>{
        console.log("client :"+msg);
    })
    
})


http.listen(port,()=>{
    console.log(`SERVER@${port}`);
})