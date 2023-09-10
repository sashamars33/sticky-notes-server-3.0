const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
 
router.post('/', userControllers.registerUser)
router.post('/login', userControllers.loginUser)
router.get('/profile', protect, userControllers.getProfile);

module.exports = router