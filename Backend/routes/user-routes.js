const express = require('express')
const { getAllusers, userSignup, updateUser, deleteUser, loginUser, getBookingsOfUser, sendMail } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.get('/',getAllusers)
userRouter.post("/signup", userSignup, sendMail);
userRouter.put("/update/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.post("/login",loginUser)
userRouter.get("/bookings/:id",getBookingsOfUser)
userRouter.post("/mail",sendMail)

module.exports = userRouter