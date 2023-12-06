const Booking = require("../models/Booking");
const User = require("../models/User")
const bcrypt = require('bcryptjs')
const nodeMailer = require('nodemailer')
const Mailgenerator = require('mailgen')

const getAllusers = async(req,res,next)=>{
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
    req.data = { name, email };
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
        if(!user){
            return res.status(500).json({message:"Something went wrong"})
        }
        try {
          let config = {
            service: "gmail",
            secure: false,
            auth: {
              user: "devpdhanasekar@gmail.com",
              pass: "tlwrtcqiljmxessd",
            },
          };

          const transporter = nodeMailer.createTransport(config);
          const mailGenerator = new Mailgenerator({
            theme: "default",
            product: {
              name: "Movie Booking Application",
              link: "https://mailgen.js/",
            },
          });

          const response = {
            body: {
              name,
              intro: "Welcome to Movie Booking application",
              data: "Thanks for joining with us",
              outro: "Keep booking movie with us...",
            },
          };

          let mail = mailGenerator.generate(response);

          let message = {
            from: {
              name: "Dhana",
              address: "devpdhanasekar@gmail.com",
            },
            to: email,
            subject: "Successfully registerd with us",
            html: mail,
          };
          await transporter.sendMail(message, (err) => {
            if (err) {
              console.log(err);
              // return res.status(500).json({err})
            }
            console.log({ message: "Mail received" });
            res.status(201).json({ user });
          });

        } catch (err) {
          console.log(err);
        }
    }
    else {
    res.status(422).json({message:"Invalid inputs"})
    }

}

const updateUser = async(req,res,next) =>{
    const id = req.params.id
    const {name,email,password} = req.body
    if (!name && name.trim() === "" && !email && email.trim() === "" && !password && password.trim() === ""){
        return res.status(422).json({message:"Invalid inputs"})
    }
    const hashedPassword = bcrypt.hashSync(password)
    let user;
    try{
        user = await User.findByIdAndUpdate(id,{name,email,password:hashedPassword})
    }catch(err){
        console.log(err)
    }

    if(!user){
        return res.status(500).json({message:"Something went wrong"})
    }
    
    return res.status(200).json({message:"Successfully updated",user})
}

const deleteUser = async(req,res,next)=>{
    const id = req.params.id
    let user;
    try{
        user = await User.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }

    if(!user){
        return res.status(500).json({message:"Unable to delete the user by this ID"})
    }
    return res.status(200).json({message:"User deleted successfully"})
}

const loginUser = async(req,res,next)=>{
    const {email,password} = req.data
    if(!email && email.trim() == "" && !password && password.trim() === ""){
        return res.status(422).json({message:"Invalid inputs"})
    }

    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(err){
        console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({message:"Unable to find a user"})
    }


    let isCorrectPassword = bcrypt.compareSync(password,existingUser.password)
    if(!isCorrectPassword){
        return res.status(500).json({message:"Incorrect password"})
    }

    return res.status(200).json({message:"Logedin successfully"})
}

const getBookingsOfUser = async(req,res,next)=>{
    const id = req.params.id
    let bookings;
    try{
        bookings = await Booking.find({"user":id})
    }catch(err){
        console.log(err)
    }

    if(!bookings){
        return res.status(404).json({message:"No bookings found"})
    }

    return res.status(200).json({bookings})
}

const sendEMail = async(name,email)=>{
    console.log("sendmail called")
    // const {name,email} = req.data

    try{
        let config = {
      service: "gmail",
      secure:false,
      auth: {
        user: "devpdhanasekar@gmail.com",
        pass: "tlwrtcqiljmxessd",
      },
    };

    const transporter = nodeMailer.createTransport(config);
    const mailGenerator = new Mailgenerator({
      theme: "default",
      product: {
        name: "Movie Booking Application",
        link: "https://mailgen.js/",
      },
    });

    const response = {
      body: {
        name,
        intro: "Welcome to Movie Booking application",
        data: "Thanks for joining with us",
        outro: "Keep booking movie with us...",
      },
    };

    let mail = mailGenerator.generate(response);

    let message = {
      from: {
        name:"Dhana",
        address:"devpdhanasekar@gmail.com"},
      to: email,
      subject: "Successfully registerd with us",
      html: mail,
    };
    await transporter.sendMail(message, (err) => {
      if (err) {
        console.log(err);
        // return res.status(500).json({err})
      }
      console.log({ message: "Mail received" });
    });
    }catch(err){
        console.log(err)
    }
}


exports.getAllusers = getAllusers
exports.userSignup = userSignup
exports.updateUser = updateUser
exports.deleteUser = deleteUser
exports.loginUser = loginUser
exports.getBookingsOfUser = getBookingsOfUser
exports.sendMail = sendEMail