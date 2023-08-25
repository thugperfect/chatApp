require("dotenv").config()

const app = require('./app')

const http = require("http").createServer(app)

const port = process.env.PORT || 8001 

const mongoose = require('mongoose')
const database = process.env.MONGO_URL

mongoose.connect(database,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

mongoose.connection.on('error',(err)=>{
    console.log("MongoDB ==> Disconnected");
    console.log(`mongoose error : ${err}`);
})
mongoose.connection.once('open',()=>{
    console.log("MongoDB ==> Connected");
})


require('./models/user')
require('./models/chatApp')
require('./models/message')



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