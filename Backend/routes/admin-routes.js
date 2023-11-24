const express = require('express')
const { adminSignup, adminLogin } = require('../controllers/admin-controller')

const adminRouter = express.Router()


adminRouter.post('/signup',adminSignup)
adminRouter.post('/login',adminLogin)

exports.adminRouter = adminRouter