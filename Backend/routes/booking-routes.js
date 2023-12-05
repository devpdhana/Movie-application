const express = require('express')
const { addBooking, getBookingById, deleteBooking, getAllBookings } = require('../controllers/booking-controller')
const bookingRouter = express.Router()

bookingRouter.post('/',addBooking)
bookingRouter.get('/:id',getBookingById)
bookingRouter.delete('/:id',deleteBooking)
bookingRouter.get('/',getAllBookings)

module.exports = bookingRouter