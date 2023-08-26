require('dotenv').config()
const jwt = require('jwt-then')

module.exports = async (req,res,next)=>{
  try{  
    if(!req.headers.authorization) return res.status(400).json({msg:"404 forbidden"})
    const token = req.headers.token.authorization.split(" ")[1]
    const payload =await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    next()
}catch (err){
    res.status(400).json({msg:err})
}
}