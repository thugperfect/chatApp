const socket = io();
const chat = document.getElementById('chat')

socket.on('connection',soc=>{
    console.log("usr connected");
    console.log(soc.id);
})

socket.emit("test","hello FU")