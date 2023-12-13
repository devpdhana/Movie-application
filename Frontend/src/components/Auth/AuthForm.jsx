import React, { useState } from 'react'
import {Box, Button, Dialog, FormLabel, IconButton, TextField, Typography} from '@mui/material'
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from 'axios'
const lableStyle = {mt:1,mb:1}
const AuthForm = ({onSubmit,isAdmin}) => {
    const[isLogin,setIslogin] = useState(false)
    const[isOpend,setIsOpend] = useState(true)
    const[inputs,setInputs] = useState({
        name:"",email:"",password:""
    })
    const handleClick = (e)=>{
        e.preventDefault()
        setIslogin(!isLogin)
    }
    const handleClose = ()=>{
        setIsOpend(false)
    }

    const handleChange = (e)=>{
        e.preventDefault()
        setInputs((prevState)=>({
            ...prevState,[e.target.name]:e.target.value
        }))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        // console.log(inputs)
        onSubmit({inputs,"isSignup":isLogin?!isLogin : !isLogin})
        // axios.post('http://localhost:8080/user/')
    }
  return (
    <Dialog open={isOpend} PaperProps={{ style: { borderRadius: 20 } }}>
      <Box sx={{ ml: "auto" }}>
        <IconButton onClick={handleClose}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography textAlign={"center"} variant="h3">
        {isLogin ? "Login" : "Signup"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          width={400}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          margin={"auto"}
        >
          {!isAdmin && !isLogin && (
            <>
              <FormLabel sx={lableStyle}>User Name</FormLabel>
              <TextField required type="name" value={inputs.name} onChange={handleChange} name="name" />
            </>
          )}
          <FormLabel sx={lableStyle}>Email</FormLabel>
          <TextField type="email" value={inputs.email} onChange={handleChange} name="email" />
          <FormLabel sx={lableStyle}>Password</FormLabel>
          <TextField type="password" value={inputs.password} onChange={handleChange} name="password" />
          <Button type='submit' sx={{ margin: 3 }} variant="contained" color="secondary">
            {isLogin ? "Login" : "Signup"}
          </Button>
         {!isAdmin && <Button
            sx={{ margin: "auto", mt: 1 }}
            variant="outlined"
            color="secondary"
            type='submit'
            onClick={handleClick}
          >
            Switch to {isLogin ? "Signup" : "Login"}
          </Button>}
        </Box>
      </form>
    </Dialog>
  );
}

export default AuthForm