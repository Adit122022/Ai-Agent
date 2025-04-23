import React from 'react'
import { useGoogleLogin  } from '@react-oauth/google';
import axios from 'axios';


const Auth = () => {
    const login = useGoogleLogin({
        onSuccess: async(tokenResponse) => {
            const { code } = tokenResponse;
        try {
          const res = await axios.post('http://localhost:3000/api/auth/google/callback', { code });
          console.log("Server response:", res.data);
        } catch (err) {
          console.error("Error sending code to backend:", err);
        }
      },
        flow:'auth-code',   //for  the access token
        onError:error => console.log(error),
        scope:"https://mail.google.com/  https://www.googleapis.com/auth/calendar    profile email openid",
      });
  return (
    <main className="auth-main h-screen overflow-hidden flex items-center justify-center">
    <section className="auth-section">
    <button
    onClick={login} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
    </section>
  </main>
  
  )
}

export default Auth