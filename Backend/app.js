const express = require('express')
const app = express()
const PORT = 8080
const dotenv = require('dotenv')
// dotenv.config()
require('./model/db')
//Middleware

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello guys</h1>')
})
app.listen(PORT,()=>{
    console.log(`Sever is running on ${PORT}`)
})