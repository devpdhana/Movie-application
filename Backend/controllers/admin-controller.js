const Admin = require("../models/Admin");
const bcrypt = require('bcryptjs')

const adminSignup = async(req,res,next)=>{
    const {name,email,password} = req.body
    if(!name && name.trim() === "" && !email && email.trim()==="" && !password && password.trim() === ""){
        return res.status(422).json({message:"Invalid inputs"})
    }
    
    const hashedPassword = bcrypt.hashSync(password)
    let admin;
    try{
        admin = new Admin({
            name,email,password:hashedPassword
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

exports.adminSignup = adminSignup