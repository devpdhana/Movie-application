const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    feature:{
        type:boolean
    },
    admin:{
        type:String
    },
    bookings:[{
        type:String,
        required:true
    }]
})

module.exports = mongoose.model("Movie",movieSchema)
//movies