import io from 'socket.io-client'
const Chat = ({match})=>{
    const chatId = match.params.id;
    const socket = io('http://localhost:8000',{
        query:{
          token:  localStorage.getItem('ACCESS_TOKEN')
        }
    })

    return(
        <h1 className="class">Chat</h1>
    )
}
export default Chat