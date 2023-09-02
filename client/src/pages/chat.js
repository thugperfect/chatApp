import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
const Chat = ()=>{
    const {id} = useParams()
    const socket = io('http://localhost:8000',{
        query:{
          token:  localStorage.getItem('ACCESS_TOKEN'),
         "Access-Control-Allow-Origin": '*',
        }
    })

    return(
        <h1 className='text-white'>Chat</h1>
    )
}
export default Chat