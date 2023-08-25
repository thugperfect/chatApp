const mongoose = require("mongoose")
const User = require('../models/user')
exports.register = async (req,res)=>{
    const {name,username,email,password} = req.body

    const newUserName = username
    const user_name = await User.findOne({username:newUserName})

    if(user_name) throw "Username Already Exists"

    const emailSyntax = /[@gmail.com]$/
    const newEmail = email
    const email_check = await User.findOne({email:newEmail})
    if(email_check) throw "Email Already Exists"

    if(!emailSyntax.test(email) ) throw "Enter correct Email"

    if(password.length<7) throw "password should be more than 8 chars"

    const user = new User({name,username,email,password})
    await user.save()

}
exports.login = async (req,res)=>{
    
}
