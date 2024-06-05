import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

  return (
    <>      
      
        <Navbar />
        <Routes>
          <Route path="/" element={loggedInUser? <Home/> : <Login />} />
          <Route path="/register" element={loggedInUser? <Home/> : <Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      
    </>
  )
}

export default App
