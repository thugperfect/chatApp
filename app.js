require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const path = require('path')


app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/',require('./routes/user'))
app.use('/',require('./routes/chatApp'))

module.exports = app