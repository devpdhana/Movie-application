const express = require('express')
const { addBooking, getBookingById } = require('../controllers/booking-controller')
const bookingRouter = express.Router()

bookingRouter.post('/',addBooking)
bookingRouter.get('/:id',getBookingById)

module.exports = bookingRouter