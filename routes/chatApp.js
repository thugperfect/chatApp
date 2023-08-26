const router = require('express').Router()

const chatAppController = require('../controller/chatAppController')
const auth = require('../middleware/auth')
router.post('/chatapp',auth,chatAppController.createChatApp)


module.exports = router