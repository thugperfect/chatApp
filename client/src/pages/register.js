import { Link } from "react-router-dom"
import axios from "axios"
import React from "react"
import { useState } from "react"
const Register = ()=>{
    const [result,setResult] = useState("")

    const nameRef = React.createRef()
    const unameRef = React.createRef()
    const emailRef = React.createRef()
    const passwdRef = React.createRef()

    const registerUser =  ()=>{
        const name = nameRef.current.value
        const username = unameRef.current.value
        const email = emailRef.current.value
        const password = passwdRef.current.value

        axios.post("http://localhost:8000/register",{
            name,username,email,password
        }).then(res=>{
            if(res)
            setResult(res.data.msg)
        }).catch(err=>{
         console.log(err);
        })
    }
console.log(result);
    return(
        <div className="text-gray-400 w-full  min-h-[100vh] flex flex-col justify-center items-center">
        <div className="container w-[400px] h-[500px] outline outline-1 outline-slate-800 bg-black rounded-lg flex flex-col justify-evenly">
            <div className="text-4xl w-full flex justify-center items-center">ChatApp</div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
            <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" ref={nameRef} type="text" name="name" id="name" placeholder="Enter your Name..."/>
                <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" ref={unameRef} type="text" name="username" id="username" placeholder="Enter your Username..."/>
                <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" ref={emailRef} type="text" name="email" id="email" placeholder="Enter your Email..."/>
                <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" ref={passwdRef} type="text" name="password" id="password" placeholder="Enter your Password..."/>
                <button onClick={registerUser} className="bg-slate-800 w-[250px] rounded-md px-5 h-[30px]" type="submit" >submit</button>
            </div>
            <div className="w-full  flex justify-center" >Already have a Account &nbsp;<div className="text-white"><Link to="/login">Login</Link></div></div>
        </div>
    </div>
    )
}
export default Register