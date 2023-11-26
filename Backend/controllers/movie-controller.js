const jwt = require('jsonwebtoken');
const Movie = require('../models/Movie');

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
        movie = await movie.save()
    }catch(err){
        return res.status()
    }

    if(!movie){
        return res.status(500).json({message:"Something went wrong"})
    }
    return res.status(201).json({movie})

}

exports.addMovie = addMovie