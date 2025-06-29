import React from 'react'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Auth from '../components/Views/Auth/Auth'
import Navbar from '../components/Views/bars/Navbar'
import Home from '../components/Pages/Home'
import ProfilePage from '../components/Pages/ProfilePage'
 
const AppRoutes = () => {
  return (
    
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes