const express = require('express')
const { adminSignup } = require('../controllers/admin-controller')

const adminRouter = express.Router()


adminRouter.post('/signup',adminSignup)

exports.adminRouter = adminRouter