const express = require('express')
const { getAllusers } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.get('/users',getAllusers)

module.exports = userRouter