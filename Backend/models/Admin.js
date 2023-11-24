const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    addedMovies:[
        {type:String,
        
        }
    ]
})

module.exports = mongoose.model("Admin",adminSchema)
//admins