import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (

<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  <AppRoutes/>
</GoogleOAuthProvider>
  )
}

export default App