const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const User = require('../models/user')
const userController = {
    
    register:async (req,res)=>{
        try{
            const {name,username,email,password} = req.body

            const newUserName = username
            const user_name = await User.findOne({username:newUserName})
        
            if(user_name) return res.status(400).json({msg: "Username already exists."})
        
            const emailSyntax = /[@gmail.com]$/
            const newEmail = email
            const email_check = await User.findOne({email:newEmail})
            if(email_check) return res.status(400).json({msg: "Email already exists."})
        
            if(!emailSyntax.test(email) ) return res.status(400).json({msg: "Enter Correct Email"})
            const hash_password = await bcrypt.hash(password,12)
            if(password.length<7) return res.status(400).json({msg: "Password must be more than 8 chars long"})
        
            const user = new User({name,username,email,password:hash_password})
            await user.save()

            res.json({
                status:"Success",
                user:{
                    ...user._doc
                }
            })
        }
        catch (err){
            return res.status(500).json({msg:err.message})
        }


},

login : async (req,res)=>{
    const {email,password} = req.body
    const user = User.findOne({email,password})
    if(!user) res.status(400).json({msg:"Incorrect Email or Password"})
}
}