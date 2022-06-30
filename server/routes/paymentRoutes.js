const express = require('express')

const PaymentInfoCtrl = require('../controllers/payment-controller.js')

const router = express.Router()

router.get('/PaymentInfo/:id', PaymentInfoCtrl.getPaymentInfoById)
router.post('/create/PaymentInfo', PaymentInfoCtrl.createPaymentInfo)

module.exports = router