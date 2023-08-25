const socket = io();
const chat = document.getElementById('chat')
const btn =document.getElementById('btn')
socket.on('connect',()=>{
   
    console.log(socket.id); 
})
btn.addEventListener('click',()=>{
    socket.emit("message","FU from client")
})