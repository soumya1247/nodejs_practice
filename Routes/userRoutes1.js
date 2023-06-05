const express =  require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../Controllers/userControllers1')
const { protect } = require('../Middleware/auth1')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router