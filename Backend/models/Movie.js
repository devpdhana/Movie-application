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
    posterUrl:{
        type:String,
        required:true
    },
    actors:[{
        type:String,
        required:true
    }],
    releaseDate:{
        type:Date,
        required:true
    },
    featured:{
        type:Boolean
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