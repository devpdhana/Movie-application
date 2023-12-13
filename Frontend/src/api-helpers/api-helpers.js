import axios from 'axios'
import { useState } from 'react'
export const getAllMovies = async()=>{
    
    const res = await axios.get('/movie/movies').catch(err=>console.log(err))
    if(res.status !== 200){
        console.log("No data")
    }
    const movies = await res.data
    return movies
}

export const sendUserAuthRequest = async(data,isSignup)=>{
    const res = await axios.post(`/user/${isSignup?"signup":"login"}`,{
        name:data.name,
        email:data.email,
        password:data.password
    }).catch((err)=>console.log(err))

    //Validation
    if(res.status !== 200 && res.status !== 201){
        console.log("Unexpected error occur")
    }
    const resData = res.data
    return resData
}

export const sendAdminLoginRequest = async(data)=>{
    const res = await axios.post(`admin/login`,{
        email:data.email,
        password:data.password
    }).catch((err)=>console.log(err))

    //Validation
    if(res.status !== 200){
        console.log("Unexpected error")
    }
    const resData = res.data
    return resData
}

// module.exports = getAllMovies
// exports.getAllMovies = getAllMovies