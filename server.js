require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()

const http = require("http")
const server = http.Server(app)
const port = process.env.PORT || 8001 
const socket = require("socket.io").server

socket.on("connection",(socket)=>{

})



app.get('/',(req,res)=>{
    res.json({status:"success",msg:""})
})

app.listen(port,()=>{
    console.log(`SERVER@${port}`);
})