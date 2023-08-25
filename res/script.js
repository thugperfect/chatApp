const socket = io();
const chat = document.getElementById('chat')
const btn =document.getElementById('btn')
const inpChat = document.getElementById('inp')

socket.on('connect',()=>{
   
    console.log(socket.id); 
})
btn.addEventListener('click',()=>{
    const inpValue = inpChat.value 
    socket.emit("message",inpValue)
})

const listen = (eventName,...args)=>{
    console.log(eventName,args);
}
socket.onAny(listen)
