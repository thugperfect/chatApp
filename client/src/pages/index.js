import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Index = ()=>{
const navigate = useNavigate()
useEffect(()=>{
    const token = localStorage.getItem("ACCESS_TOKEN")
    if(token){
        navigate('/dashboard')
    }else{
        navigate('/login')
    }

})
}
export default Index