import axios from "axios"
import React, {  useState } from "react"
import { Link } from "react-router-dom"
const Login = ()=>{
    const [result,setResult] = useState()
    const emailRef = React.createRef()
    const passwdRef = React.createRef()

    const loginUser = () =>{
        setResult("")
        const email = emailRef.current.value
        const password = passwdRef.current.value
        
        axios.post('http://localhost:8000/login',{
            email,password
        }).then(res =>{
            if(res)
            setResult(res.data.msg)
        }).catch(err=>{
            setResult(err.res.data.msg)
        })
    }
    return(
        <div className="text-gray-400 w-full  min-h-[100vh] flex flex-col justify-center items-center">
             {
                (result === "user Logged in successfully")?
                <div className="bg-green-500 w-[400px] mb-2 flex justify-center items-center text-white rounded-lg">{result}</div>
                : <div className="bg-red-500 w-[400px] mb-2 flex justify-center items-center text-white rounded-lg">{result}</div>
            }
            <div className="container w-[400px] h-[500px] outline outline-1 outline-slate-800 bg-black rounded-lg flex flex-col justify-evenly">
                <div className="text-4xl w-full flex justify-center items-center">ChatApp</div>
                <div className="w-full flex flex-col justify-center items-center gap-2">
                    <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" ref={emailRef} type="text" name="email" id="email" placeholder="Enter your Email..."/>
                    <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" ref={passwdRef} type="text" name="password" id="password" placeholder="Enter your Password..."/>
                    <button onClick={loginUser} className="bg-slate-800 w-[250px] rounded-md px-5 h-[30px]" type="submit" >submit</button>
                </div>
                <div className="w-full  flex justify-center" >Don't have a Account &nbsp;
                <div className="text-white"><Link to="/register">Signup</Link></div></div>
            </div>
        </div>
    )
}
export default Login