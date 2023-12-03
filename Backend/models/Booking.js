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
    seatnumber:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("booking",bookingSchema)
//bookings