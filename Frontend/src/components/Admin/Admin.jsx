import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendAdminLoginRequest } from '../../api-helpers/api-helpers'

const Admin = () => {

  const onResponseReceived = (data)=>{
    console.log(data)
    localStorage.setItem("AdminId",data.id)
    localStorage.setItem("token",data.token)
  }

  const getData = (data)=>{
    console.log("Admin",data)
    sendAdminLoginRequest(data.inputs).then((res)=>onResponseReceived(res)).catch((err)=>console.log(err))
  }
  return (
    <AuthForm onSubmit={getData} isAdmin={true}/>
  )
}

export default Admin