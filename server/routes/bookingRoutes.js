const express = require('express')

const BookingsCtrl = require('../controllers/booking-controller.js')

const router = express.Router()

router.post('/Bookings/create', BookingsCtrl.createBookings)
router.get('/Bookings/:id', BookingsCtrl.getBookingsById)
router.get('/Bookings', BookingsCtrl.getBookings)

module.exports = router