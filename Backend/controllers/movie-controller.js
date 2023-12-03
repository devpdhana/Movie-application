const jwt = require('jsonwebtoken');
const Movie = require('../models/Movie');
const { default: mongoose } = require('mongoose');
const Admin = require('../models/Admin');

const addMovie = async(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(!token && token.trim() === ""){
        res.status(404).json({message:"Token not found"})
    }

    //Token verification
    let adminId;
    jwt.verify(token,process.env.SECRET_KEY,(err,decrypted)=>{
        if(err){
            console.log("error occured")
            return res.status(400).json({message:`${err}`})
        }else {
            adminId = decrypted.id
        }
    })

    //New movie
    const {title,description,posterUrl,actors,releaseDate} = req.body
    if(!title && title.trim() === "" && !description && description.trim() === "" && !posterUrl && posterUrl.trim() === "",!releaseDate && releaseDate.trim() === "" && !actors && actors.trim() === ""){
        return res.status(422).json({message:"Invalid inputs"})
    }
    let movie;
    try{
        movie = new Movie({
            title,description,featured:false,posterUrl,actors,releaseDate:new Date(`${releaseDate}`),admin:adminId
        })

        const session = await mongoose.startSession()
        const adminUser = await Admin.findById(adminId)
        session.startTransaction()
        await movie.save({session})
        adminUser.addedMovies.push(movie)
        await adminUser.save({session})
        await session.commitTransaction()
    }catch(err){
        return res.status()
    }

    if(!movie){
        return res.status(500).json({message:"Something went wrong"})
    }
    return res.status(201).json({movie})

}

const getAllmovies = async(req,res,next)=>{
    let movies;
    try{
        movies = await Movie.find()
    }catch(err){
        console.log(err)
    }

    if(!movies){
        return res.status(404).json({message:"Movies not found"})
    }

    return res.status(200).json({movies})
}

const getMovieById = async(req,res,next)=>{
    const id = req.params.id
    let movie;
    try{
        movie = await Movie.findById(id)
    }catch(err){
        console.log(err)
    }
    if(!movie){
        return res.status(404).json({message:"Movie not found"})
    }
    return res.status(200).json({movie})
}

exports.addMovie = addMovie
exports.getAllmovies = getAllmovies
exports.getMovieById = getMovieById