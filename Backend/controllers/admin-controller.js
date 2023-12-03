const Admin = require("../models/Admin");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminSignup = async(req,res,next)=>{
    const {email,password} = req.body
    if(!email && email.trim()==="" && !password && password.trim() === ""){
        return res.status(422).json({message:"Invalid inputs"})
    }
    
    const hashedPassword = bcrypt.hashSync(password)
    let admin;
    try{
        admin = new Admin({
            email,password:hashedPassword,
        })
        admin = await admin.save()
    }catch(err){
        console.log(err)
    }
    if(!admin){
        return res.status(500).json({message:"Something went wrong"})
    }
    return res.status(201).json({admin})
}

const adminLogin = async(req,res,next)=>{
    const {email,password} = req.body

    if(!email && email.trim() === "" && !password && password.trim() === ""){
        return res.status(422).json({message:"Invalid inputs"})
    }

    let existingAdmin;
    try{
        existingAdmin = await Admin.findOne({email})
    }catch(err){
        console.log(err);
    }

    if(!existingAdmin){
        return res.status(400).json({message:"Admin not found...Please Signup"}) //400 - Unauthorized
    }

    let isCorrectPassword;
    try{
        isCorrectPassword = bcrypt.compareSync(password,existingAdmin.password)
    }catch(err){
        console.log(err)
    }

    if(!isCorrectPassword){
        return res.status(400).json({message:"Something went wrong"})
    }

    const token = jwt.sign({id:existingAdmin._id},process.env.SECRET_KEY,{
        expiresIn:"7d"
    })

    return res.status(200).json({message:"Logged in successfully",token,id:existingAdmin._id})

}

const getAllAdmins = async(req,res,next)=>{
    let admins;
    try{
        admins = await Admin.find()
    }catch(err){
        console.log(err)
    }

    if(!admins){
        return res.status(500).json({message:"Internal server error"})
    }

    return res.status(200).json({admins})
}

exports.adminSignup = adminSignup
exports.adminLogin = adminLogin
exports.getAllAdmins = getAllAdmins