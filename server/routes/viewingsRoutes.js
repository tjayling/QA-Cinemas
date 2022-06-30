const express = require('express')

const ViewingsCtrl = require('../controllers/viewings-controller.js')

const router = express.Router()

router.get('/Viewings/:id', ViewingsCtrl.getViewingsById)
router.get('/Viewings', ViewingsCtrl.getViewings)

module.exports = router