const mongoose = require('mongoose')
const Chatapp = require("../models/chatApp")
const chatAppController ={
    createChatApp: async (req,res) =>{
        const {name} = req.body
        const check_name = await Chatapp.findOne({name})
        if(check_name) return res.status(400).json({msg:"name already exists"})

        const chatapp = new Chatapp({name})
    await chatapp.save()
    res.json({msg:"chat added..."})

        

    }

}
module.exports = chatAppController