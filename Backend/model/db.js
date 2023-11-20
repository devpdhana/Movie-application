const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = ()=>{
    mongoose
      .connect(
        `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.w0yoory.mongodb.net/MovieApp?retryWrites=true&w=majority`
      )
      .then(() => console.log("DB connected"))
      .catch((err) => console.log(err));
}

connectDB()
exports.connectDB = connectDB 
//Mongodb pass - YWqoPlmxGKi4QpYK