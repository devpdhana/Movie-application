const express = require('express')
const { getAllusers, userSignup } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.get('/',getAllusers)
userRouter.post("/signup",userSignup)

module.exports = userRouter