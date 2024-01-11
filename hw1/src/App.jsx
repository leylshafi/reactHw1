import React from 'react'
import MainCard from './mainpage/common/MainCard'
import Navigation from './mainpage/common/Navigation'

function App() {
  return (
    <>
      <Navigation/>
      <div>
        <div>
          <button className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px]'>Create card</button>
        </div>
        <div className='flex flex-wrap px-[58px]'>
          <MainCard/>
          <MainCard/>
          <MainCard/>
          <MainCard/>
          <MainCard/>
        </div>
      </div>

    </>
  )
}

export default App