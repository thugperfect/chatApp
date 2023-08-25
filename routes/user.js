const router = require('express').Router()
const {catchError} = require('../handlers/errHandler')
const userController = require('../controller/userController')

router.post('/login',catchError(userController.login))

router.post('/register',catchError(userController.register))