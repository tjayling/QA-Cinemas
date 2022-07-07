const express = require('express')

const ScreensCtrl = require('../controllers/screen-controller.js')

const router = express.Router()

router.get('/Screens/:id', ScreensCtrl.getScreensById)
router.get('/Screens', ScreensCtrl.getScreens)
router.post('/Screens/create', ScreensCtrl.createScreens)

module.exports = router