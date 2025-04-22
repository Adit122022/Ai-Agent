import React from 'react'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
 
const AppRoutes = () => {
  return (
    
    <Router>
        <Routes>
            <Route path="/" element={<div>Hello </div>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes