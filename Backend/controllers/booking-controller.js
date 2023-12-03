const Booking = require("../models/Booking");

const addBooking = async(req,res,next)=>{
    const {movie,date,seatNumber,user} = req.body

    let booking;
    try{
        booking = new Booking({movie,date:new Date(`${date}`),seatNumber,user})
        booking = await booking.save()
    }catch(err){
        console.log(err)
    }

    if(!booking){
        return res.status(500).json({message:"Unable to create booking"})
    }

    return res.status(201).json({booking})
} 

exports.addBooking = addBooking