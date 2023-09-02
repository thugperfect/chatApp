import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Dashboard = ()=>{
    const [chat,setChat] = useState([])
    const getChat = ()=>{
        axios.get('http://localhost:8000/chatapp',{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("ACCESS_TOKEN")
            }
        }).then((res)=>{
            console.log(res.data);
            setChat(res.data.chat)
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getChat()
    },[])
    return(
        <div className="text-gray-400 w-full  min-h-[100vh] flex flex-col justify-center items-center">
            <div className="container w-[400px] min-h-[300px] p-5 outline outline-1 outline-slate-800 bg-black rounded-lg flex flex-col justify-evenly">
                <div className="text-4xl w-full flex justify-center items-center">ChatApp</div>
                <div className="w-full flex flex-col justify-center items-center gap-2">
                    <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" type="text" name="chatname" id="chatname" placeholder="Enter Chat Name..."/>
                    <button className="bg-slate-800 w-[250px] rounded-md px-5 h-[30px]" type="submit" >Create Chat</button>
                </div>
                {   chat?.length>0 ?
                <div className="flex flex-col items-center">
                   { chat.map((prop)=>(
                    <div key={prop._id} className="flex w-4/5 p-2">
                        <div className="text-white w-full">{prop.name}</div>
                        <Link to={'/chat/'+prop._id}>
                        <button className="">Chat</button>
                        </Link>
                        
                    </div>
                        
                    )
                        
                    )}
                </div>
                    :""
                }
             
            </div>
        </div>
    )
}
export default Dashboard