const express = require('express')
const { addBooking, getBookingById, deleteBooking } = require('../controllers/booking-controller')
const bookingRouter = express.Router()

bookingRouter.post('/',addBooking)
bookingRouter.get('/:id',getBookingById)
bookingRouter.delete('/:id',deleteBooking)

module.exports = bookingRouter