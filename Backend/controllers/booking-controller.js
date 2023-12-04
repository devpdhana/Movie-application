const { default: mongoose } = require("mongoose");
const Booking = require("../models/Booking");
const Movie = require("../models/Movie");
const User = require("../models/User");

const addBooking = async(req,res,next)=>{
    const {movie,date,seatNumber,user} = req.body

    let booking;
    let existingUser,existingMovie;
    try{
        existingMovie = await Movie.findById(movie)
    }catch(err){
        console.log(err);
    }
    if(!existingMovie){
        return res.status(404).json({message:"Movie not found"})
    }

    try {
      existingUser = await User.findById(user);
    } catch (err) {
      console.log(err);
    }
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    try{
        booking = new Booking({movie,date:new Date(`${date}`),seatNumber,user})

        const session = await mongoose.startSession()
        session.startTransaction()
        existingUser.bookings.push(booking)
        existingMovie.bookings.push(booking)
        await existingUser.save({session})
        await existingMovie.save({session})
        await booking.save({session})
        session.commitTransaction()
    }catch(err){
        console.log(err)
    }

    if(!booking){
        return res.status(500).json({message:"Unable to create booking"})
    }

    return res.status(201).json({booking})
}

const getBookingById = async(req,res,next)=>{
    const bookingId = req.params.id
    let booking;
    try{
        booking = await Booking.findById(bookingId)
    }catch(err){
        console.log(err)
    }

    if(!bookingId){
        return res.status(500).json({message:"Booking not found"})
    }

    return res.status(200).json({booking})
}

exports.addBooking = addBooking
exports.getBookingById = getBookingById