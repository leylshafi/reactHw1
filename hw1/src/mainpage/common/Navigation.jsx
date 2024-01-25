import React from 'react'
import { useContext } from 'react'
import Context from '../../ContextWrapper'
import { useNavigate } from 'react-router-dom'
function Navigation() {
  const {email, setAuthorized} = useContext(Context)
  const navigate  = useNavigate()
  return (
    <nav className='flex flex-col sm:flex-row bg-[#E7E7E7] py-3 px-[68px]  items-center sm:justify-between justify-center'>
        
        <p className='font-bold text-xl  sm:mb-0 mb-1'>{email}</p>
        
        <button 
          onClick={()=>{
            setAuthorized(false)
            navigate("/login")
          }}
         className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 sm:w-auto w-[100%]'>Log out</button>
      </nav>
  )
}

export default Navigation