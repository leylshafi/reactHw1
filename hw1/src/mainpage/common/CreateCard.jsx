import React, { useState } from 'react'
function CreateCard({dispatch,setCards, email}) {
  const [formData, setFormData]=useState({})

  const handleChange = (e)=>{
    const {name, value} = e.target;
    console.log(value);
    setFormData((prevForm)=>({
      ...prevForm,
      [name]:value,
      author:email,
    }));
  }

  const createCard = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        const data = await response.json();
        dispatch({ type: '' });
      }
      
    } catch (error) {
      console.error('Error creating card:', error.message);
    }
  };

  return (
    <form  className='flex flex-col items-center sm:w-[700px] w-screen sm:h-[350px] h-screen justify-center rounded-none sm:rounded-[13px] bg-white'>
        <div className='w-[100%]'>
            <button className='bg-red-600 p-2 rounded-full float-right my-0 mx-5' 
            onClick={()=>{
              dispatch({ type: '' });
              }}></button>
        </div>
          <h1 className='text-3xl font-bold mb-5'>CREATE CARD</h1>
          <div className='flex flex-col w-[80%]'>
            <label htmlFor="" className='text-zinc-600'>Title:</label>
            <input required 
              name="title"
              onChange={(e)=>handleChange(e)} 
              className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1'
            />
            <label htmlFor="" className='text-zinc-600'>Description:</label>
            <input 
              name="description"
              onChange={(e)=>handleChange(e)} 
              required 
              className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1'
            />
            <div className='flex justify-end h-[20%] items-center mt-[20px]'>
              <button className='border border-zinc-300 py-2 px-5 rounded-[5px] font-bold hover:bg-[#DFDFDF]'
              onClick={()=>{
                dispatch({ type: '' });
              }}
              >Close</button>
              <button
              onClick={(e)=>{
                createCard(e)
              }}
               className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-[#F6AB1A]'>Create</button>
            </div>
          </div>
        </form>
  )
}

export default CreateCard