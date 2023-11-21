const User = require("../models/User")

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

exports.getAllusers = getAllusers