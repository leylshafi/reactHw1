import {useEffect, useState} from 'react'
import MainCard from './common/MainCard'
import Navigation from './common/Navigation'
import CreateCard from './common/CreateCard'
import EditCard from './common/EditCard'
import DeleteCard from './common/DeleteCard'
function Mainpage({setAuthorized,authorized,email}) {
  const [openModal, setOpenModal]=useState("")
  const [activeCard, setActiveCard]=useState()
  const [cards, setCards]=useState([])
  const [filteredCards, setFilteredCards]=useState([])

  useEffect(()=>{
    setFilteredCards(cards.filter((card)=>card.author === email))
    console.log(cards)
  }, [cards])

  return (
    <div className={`${openModal?"overflow-hidden":null} h-screen`}>
      <Navigation setAuthorized={setAuthorized} authorized = {authorized} email={email}/>
      <button className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px] '
      onClick={(e)=>{
        setOpenModal("create")
      }}
      >Create card</button>
       
      <div className='w-full grid sm:grid-cols-2 lg:grid-cols-3 px-5 lg:px-[58px]'>
        {
          filteredCards.length?(
            filteredCards.map((card)=>
              <MainCard 
              key={card.id}
              data={card}
              setActiveCard={setActiveCard} 
              setOpenModal={setOpenModal}/>

            )
          ):(
            <p className='text-center col-span-3 mt-10'>No cards found</p>
          )
        }
        
      </div>
      
      {openModal=="create" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <CreateCard setOpenModal={setOpenModal} email={email} setCards={setCards} />
        </div>
      )}
      {openModal=="edit" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <EditCard
           setOpenModal={setOpenModal}
           setCards={setCards}
           cards ={cards}
           activeCard={activeCard}/>
        </div>
      )}
      {openModal=="delete" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <DeleteCard 
            setOpenModal={setOpenModal} 
            cards={cards} 
            activeCard={activeCard} 
            setCards={setCards}/>
        </div>
      )}
      
      
    </div>
  )
}

export default Mainpage