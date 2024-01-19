import React from 'react'

function MainCard({dispatch, data, setActiveCard}) {
  return (
    <div className='w-auto w-max-[560px] border border-zinc-300 rounded-[5px] mx-[10px] my-[20px]'>
            <div className='bg-[#E7E7E7] p-[30px] '>
              <h1 className='text-3xl font-bold'>{data.title}</h1>
              <p className='my-4 text-justify font-medium'>{data.description}</p>
            </div>
            <div className='flex bg-zinc-300 justify-end p-2 items-center'>
              <button className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold hover:bg-yellow-500' 
              onClick={()=>{
                setActiveCard(data)
                dispatch({ type: 'edit' });
              }}>Edit</button>
              <button className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-yellow-500'
              onClick={()=>{
                dispatch({ type: 'delete' });
                setActiveCard(data)
              }}
              >Delete</button>
            </div>
    </div>
  )
}

export default MainCard