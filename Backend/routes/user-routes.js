const express = require('express')
const { getAllusers, userSignup, updateUser, deleteUser, loginUser } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.get('/',getAllusers)
userRouter.post("/signup",userSignup)
userRouter.put("/update/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.post("/login",loginUser)

module.exports = userRouter