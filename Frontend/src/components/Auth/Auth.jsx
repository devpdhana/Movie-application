import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers'

const Auth = () => {

  const onResponseReceived = (data)=>{
    console.log(data)
    localStorage.setItem("userId",data.id)
  }
  const getData = (data)=>{
    console.log("Auth",data)
    sendUserAuthRequest(data.inputs,data.isSignup).then((res)=>onResponseReceived(res)).catch((err)=>console.log(err))
  }
  return (
    <AuthForm onSubmit={getData} isAdmin={false}/>
  )
}

export default Auth