import {useState} from 'react'
import MainCard from './common/MainCard'
import Navigation from './common/Navigation'
import CreateCard from './common/CreateCard'
import EditCard from './common/EditCard'
import DeleteCard from './common/DeleteCard'
function Mainpage({setAuthorized,authorized,email}) {
  const [createOpened, openCreateModal] = useState(false)
  const [editOpened, openEditModal] = useState(false)
  const [deleteOpened, openDeleteModal] = useState(false)
  return (
    <>
      <Navigation setAuthorized={setAuthorized} authorized = {authorized} email={email}/>
      <button className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px] '
      onClick={(e)=>{
        openCreateModal(true)
      }}
      >Create card</button>
       
      <div className='flex flex-wrap px-[58px]'>
        <MainCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
        <MainCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
        <MainCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
        <MainCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
        <MainCard openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>
      </div>
      
      {createOpened && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <CreateCard openCreateModal={openCreateModal} />
        </div>
      )}
      {editOpened && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <EditCard openEditModal={openEditModal} />
        </div>
      )}
      {deleteOpened && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <DeleteCard openDeleteModal={openDeleteModal} />
        </div>
      )}
      
      
    </>
  )
}

export default Mainpage