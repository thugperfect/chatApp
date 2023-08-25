require("dotenv").config()
const { log } = require("console")

const mongoose = require("mongoose")
const app = require('./app')

const http = require("http").createServer(app)
const path = require('path')

const port = process.env.PORT || 8001 
const io = require("socket.io")(http)



io.on('connection',socket=>{
    console.log("Online");
    console.log(socket.id);

    socket.on('disconnect',()=>{
        console.log("Ofline");
    })
    socket.on("message",(msg)=>{
        console.log("client :"+msg);
        
    })
    socket.emit('server',"Hi mf from server")
    
})


http.listen(port,()=>{
    console.log(`SERVER@${port}`);
})