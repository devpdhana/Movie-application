const express = require('express')
const userRouter = require('./routes/user-routes')
const { adminRouter } = require('./routes/admin-routes')
const movieRouter = require('./routes/movie-routes')
const bookingRouter = require('./routes/booking-routes')
const app = express()
const PORT = 8080

require('./models/db')
//Middleware
app.use(express.json())
app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/movie',movieRouter)
app.use('/booking',bookingRouter)

app.listen(PORT,()=>{
    console.log(`Sever is running on ${PORT}`)
})