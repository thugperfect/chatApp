const router = require('express').Router()

const chatAppController = require('../controller/chatAppController')
const auth = require('../middleware/auth')
router.get('/chatapp',auth,chatAppController.getAllChat)
router.post('/chatapp',auth,chatAppController.createChatApp)


module.exports = router