const router = require('express').Router()
const {catchError} = require('../handlers/errHandler')
const userController = require('../controller/userController')
router.post('/register',catchError(userController.register))
router.post('/login',catchError(userController.login))

module.exports = router