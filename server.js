require("dotenv").config()

const app = require('./app')

const http = require("http").createServer(app)

const port = process.env.PORT || 8001 
const jwt =  require("jwt-then")
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

io.use(async (socket,next) =>{
    try{
        const token = socket.handshake.query.token
        const payload = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        console.log(payload);
        socket.userId = payload.id

    }catch (err){

    }
})

io.on('connection',(socket)=>{
    console.log("connected"+socket.userId)
    socket.on('disconnect',()=>{
        console.log("disconnected"+socket.userId);
    })
})

http.listen(port,()=>{
    console.log(`SERVER@${port}`);
})