require('dotenv').config()
const express = require("express")
const app = express()
const path = require('path')


app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use(express.static("./res"))

app.use('/',require('./routes/user'))


module.exports = app