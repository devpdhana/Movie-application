const User = require("../models/User")
const bcrypt = require('bcryptjs')

const getAllusers = async(req,res,next)=>{
    console.log("F called")
    let users;
    try{
        users = await User.find()
    }catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(500).json({message:"No users found"})
    }

    return res.status(200).json({users})
}

const userSignup = async(req,res,next)=>{
    const {name,email,password} = req.body
    if(name && name.trim() !== "" && email && email.trim() !== "" && password && password.trim() !== ""){
        const hashedPassword = bcrypt.hashSync(password)
        let user;
        try{
            user = new User({
                name,email,password:hashedPassword
            })
            user = await user.save()
        }catch(err){
            console.log(err)
        }

        return res.status(201).json({user})
    }
    res.status(422).json({message:"Invalid inputs"})
}

exports.getAllusers = getAllusers
exports.userSignup = userSignup