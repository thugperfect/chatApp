const Dashboard = ()=>{
    return(
        <div className="text-gray-400 w-full  min-h-[100vh] flex flex-col justify-center items-center">
            <div className="container w-[400px] h-[300px] outline outline-1 outline-slate-800 bg-black rounded-lg flex flex-col justify-evenly">
                <div className="text-4xl w-full flex justify-center items-center">ChatApp</div>
                <div className="w-full flex flex-col justify-center items-center gap-2">
                    <input className=" w-[250px] rounded-md outline-none px-5 h-[30px]" type="text" name="chatname" id="chatname" placeholder="Enter Chat Name..."/>
                    <button className="bg-slate-800 w-[250px] rounded-md px-5 h-[30px]" type="submit" >Create Chat</button>
                </div>
             
            </div>
        </div>
    )
}
export default Dashboard