import { Link } from "react-router-dom"
const Register = ()=>{
    return(
        <div className="text-gray-400 w-full  min-h-[100vh] flex flex-col justify-center items-center">
        <div className="container w-[400px] h-[500px] outline outline-1 outline-slate-800 bg-black rounded-lg flex flex-col justify-evenly">
            <div className="text-4xl w-full flex justify-center items-center">ChatApp</div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
            <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" type="text" name="name" id="name" placeholder="Enter your Name..."/>
                <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" type="text" name="uname" id="uname" placeholder="Enter your Username..."/>
                <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" type="text" name="email" id="email" placeholder="Enter your Email..."/>
                <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" type="text" name="passwd" id="passwd" placeholder="Enter your Password..."/>
                <button className="bg-slate-800 w-[250px] rounded-md px-5 h-[30px]" type="submit" >submit</button>
            </div>
            <div className="w-full  flex justify-center" >Already have a Account &nbsp;<a className="text-white"><Link to="/login">Login</Link></a></div>
        </div>
    </div>
    )
}
export default Register