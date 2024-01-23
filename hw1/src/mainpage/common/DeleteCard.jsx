import React from 'react'

function DeleteCard({dispatch,  id }) {
  const deleteCard= async (id)=>{
    try {
      const response  = await fetch(`http://localhost:3000/cards/${id}`,{
        method: "DELETE"
      });
      const data = await response.json()
      console.log("Deleted: ",data.message);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = (e)=>{
    e.preventDefault()
    deleteCard(id)
    console.log(id);
    dispatch({ type: "" })
  }
  return (
    <form action="" className='flex flex-col items-center sm:w-[700px] w-screen sm:h-[250px] h-screen justify-center rounded-none sm:rounded-[13px] bg-white'>
    <div className='w-[100%]'>
        <button className='bg-red-600 p-2 rounded-full float-right my-0 mx-5' 
        onClick={()=>{
          dispatch({ type: '' });
          }}></button>
    </div>
      <h1 className='text-3xl font-bold mb-5'>DELETE CARD</h1>
      <label htmlFor="" className='text-zinc-600'>Are you sure you want to delete card “Card name”?</label>
        <div className='flex justify-center h-[20%] items-center mt-[20px]'>
          <button className='border border-zinc-300 py-2 px-5 rounded-[5px] font-bold hover:bg-[#DFDFDF]'
          onClick={()=>{
            dispatch({ type: '' });
          }}
          >Close</button>
          <button className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-[#F6AB1A]'
          onClick={(e) => handleDelete(e)}
          >Delete</button>
        </div>
      
    </form>
  )
}

export default DeleteCard