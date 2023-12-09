import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Movies from './components/Movies/Movies'
import Admin from './components/Admin/Admin'
import Auth from "./components/Auth/Auth"
import Home from "./components/Home"

function App() {

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
