const router = require('express').Router()
const {catchError} = require('../handlers/errHandler')
const {login,register} = require('../controller/userController')

router.post('/login',login)

router.post('/register',register)