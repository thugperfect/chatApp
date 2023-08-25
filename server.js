require("dotenv").config()

const app = require('./app')

const http = require("http").createServer(app)

const port = process.env.PORT || 8001 

const mongoose = require('mongoose')
const database = process.env.MONGO_URL

mongoose.connect(database)

mongoose.connection.on('error',(err)=>{
    console.log(`mongoose error : ${err}`);
})
mongoose.connection.once('open',()=>{
    console.log("MongoDB ==> Connected");
})

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