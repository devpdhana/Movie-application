const express = require('express')
const { adminSignup, adminLogin, getAllAdmins } = require('../controllers/admin-controller')

const adminRouter = express.Router()


adminRouter.post('/signup',adminSignup)
adminRouter.post('/login',adminLogin)
adminRouter.get('/',getAllAdmins)

exports.adminRouter = adminRouter