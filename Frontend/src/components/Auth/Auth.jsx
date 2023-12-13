import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers'

const Auth = () => {
  const getData = (data)=>{
    console.log("Auth",data)
    sendUserAuthRequest(data.inputs,data.isSignup).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }
  return (
    <AuthForm onSubmit={getData} isAdmin={false}/>
  )
}

export default Auth