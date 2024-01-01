import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Movies from './components/Movies/Movies'
import Admin from './components/Admin/Admin'
import Auth from "./components/Auth/Auth"
import Home from "./components/Home"
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userAction,adminAction} from './store'

function App() {
  const isUserloggedIn = useSelector((state)=>state.user.isLoggedin)
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedin)
  console.log("isUserloggedIn", isUserloggedIn);
  console.log("Admin",isAdminLoggedIn)
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log("called entry");
    if(localStorage.getItem("UserId")){
      console.log("called")
      dispatch(userAction.login())
    }else if(localStorage.getItem("AdminId")){
      console.log("called");
      dispatch(adminAction.login())
    }
  },[])

  return (
    <>
      <Header/>
      <section>
        <Routes>
          <Route path="movies" element={<Movies/>}/>
          <Route path="admin" element={<Admin/>}/>
          <Route path="auth" element={<Auth/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </section>
    </>
  )
}

export default App
