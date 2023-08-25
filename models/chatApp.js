const mongoose = require('mongoose')

const chatAppSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true,
    },
    
})
module.exports = mongoose.model('chatApp',chatAppSchema)