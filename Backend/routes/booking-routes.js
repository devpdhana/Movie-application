const express = require('express')
const { addBooking } = require('../controllers/booking-controller')
const bookingRouter = express.Router()

bookingRouter.post('/',addBooking)

module.exports = bookingRouter