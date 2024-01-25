import React from 'react'
import LoginCard from './component/LoginCard'
import { useLocation } from 'react-router-dom'

function Login() {
  const location  = useLocation();
  return (
    <div className='flex justify-center items-center h-screen'>
        <LoginCard/>
    </div>
        
  )
}

export default Login