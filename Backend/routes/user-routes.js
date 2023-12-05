const express = require('express')
const { getAllusers, userSignup, updateUser, deleteUser, loginUser, getBookingsOfUser } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.get('/',getAllusers)
userRouter.post("/signup",userSignup)
userRouter.put("/update/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.post("/login",loginUser)
userRouter.get("/bookings/:id",getBookingsOfUser)

module.exports = userRouter