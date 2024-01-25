import React, { useState } from 'react'

function EditCard({dispatch,activeCard}) {
  const [formData, setFormData]=useState({
    title: activeCard.title,
    description : activeCard.description
  })


  const editCard = async (id, formData)=>{
    try {
      const response = await fetch(`http://localhost:3000/cards/${id}`,{
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = (e) => {
    e.preventDefault()
    const editedCard = { ...activeCard, ...formData };
    editCard(activeCard._id,editedCard);
    dispatch({ type: '' });
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
      ...prevData,
      [name]: value,
  }));
};

  return (
    <form action="" className='flex flex-col items-center sm:w-[700px] w-screen sm:h-[350px] h-screen justify-center rounded-none sm:rounded-[13px] bg-white'>
        <div className='w-[100%]'>
            <button className='bg-red-600 p-2 rounded-full float-right my-0 mx-5' 
            onClick={()=>{
              dispatch({ type: '' });
              }}></button>
        </div>
          <h1 className='text-3xl font-bold mb-5'>EDIT CARD</h1>
          <div className='flex flex-col w-[80%]'>
            <label htmlFor="" className='text-zinc-600'>Title:</label>
            <input required  
              className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1'
              name='title'
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className='text-zinc-600'>Description:</label>
            <input 
              required 
              className='border border-zinc-300 rounded-[6px] my-2 h-[40px] p-1'
              name='description'
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
            <div className='flex justify-end h-[20%] items-center mt-[20px]'>
              <button className='border border-zinc-300 py-2 px-5 rounded-[5px] font-bold hover:bg-[#DFDFDF]'
              onClick={()=>{
                dispatch({ type: '' });
              }}
              >Close</button>
              <button className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-[#F6AB1A]'
                onClick={(e) => {
                  handleEdit(e);
                }}
              >Save</button>
            </div>
          </div>
        </form>
  )
}

export default EditCard