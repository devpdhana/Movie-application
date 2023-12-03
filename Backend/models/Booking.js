const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = Schema({
    movie:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    seatNumber:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("Booking",bookingSchema)
//bookings