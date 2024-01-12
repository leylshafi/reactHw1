import React from 'react'
import LoginCard from './component/LoginCard'

function Login({setAuthorized,setEmail,email}) {
  return (
    <div className='flex justify-center items-center h-screen'>
        <LoginCard setAuthorized={setAuthorized} setEmail={setEmail} email={email}/>
    </div>
        
  )
}

export default Login