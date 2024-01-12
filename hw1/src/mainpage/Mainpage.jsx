import React from 'react'
import MainCard from './common/MainCard'
import Navigation from './common/Navigation'
function Mainpage({setAuthorized,authorized,email}) {
  return (
    <>
      <Navigation setAuthorized={setAuthorized} authorized = {authorized} email={email}/>
      <button className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px]'>Create card</button>
       
      <div className='flex flex-wrap px-[58px]'>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
      </div>
    </>
  )
}

export default Mainpage