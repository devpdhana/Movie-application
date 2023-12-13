import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendAdminLoginRequest } from '../../api-helpers/api-helpers'

const Admin = () => {

  const getData = (data)=>{
    console.log("Admin",data)
    sendAdminLoginRequest(data.inputs).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }
  return (
    <AuthForm onSubmit={getData} isAdmin={true}/>
  )
}

export default Admin