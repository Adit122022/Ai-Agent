import React from 'react'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Auth from '../components/Views/Auth/Auth'
 
const AppRoutes = () => {
  return (
    
    <Router>
        <Routes>
            <Route path="/" element={<div>Hello </div>}/>
            <Route path="/auth" element={<Auth/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes