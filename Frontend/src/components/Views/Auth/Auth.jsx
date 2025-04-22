import React from 'react'
import { useGoogleLogin  } from '@react-oauth/google';


const Auth = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError:error => console.log(error),
        scope:"https://mail.google.com/  https://www.googleapis.com/auth/calendar    profile email openid",
      });
  return (
  <main className='auth-main '>
<section className="auth-section h-screen flex items-center justify-center">
    <button className='px-4 py-1 bg-emerald-500 text-white rounded uppercase' onClick={login}> continue with google</button>
</section>
  </main>
  )
}

export default Auth