const addMovie = async(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(!token && token.trim() === ""){
        res.status(404).json({message:"Token not found"})
    }
    console.log(token)
}

exports.addMovie = addMovie