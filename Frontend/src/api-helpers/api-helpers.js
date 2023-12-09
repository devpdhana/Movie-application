import axios from 'axios'
import { useState } from 'react'
export const getAllMovies = async()=>{
    
    const res = await axios.get('http://localhost:8080/movie/movies').catch(err=>console.log(err))
    if(res.status !== 200){
        console.log("No data")
    }
    const movies = await res.data
    return movies
}

// module.exports = getAllMovies
// exports.getAllMovies = getAllMovies