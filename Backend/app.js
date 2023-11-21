const express = require('express')
const userRouter = require('./routes/user-routes')
const app = express()
const PORT = 8080

require('./models/db')
//Middleware
app.use(express.json())
app.use('/',userRouter)

app.listen(PORT,()=>{
    console.log(`Sever is running on ${PORT}`)
})