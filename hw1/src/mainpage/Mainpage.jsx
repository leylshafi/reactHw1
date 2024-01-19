import {useEffect, useState, useContext, useReducer} from 'react'
import MainCard from './common/MainCard'
import Navigation from './common/Navigation'
import CreateCard from './common/CreateCard'
import EditCard from './common/EditCard'
import DeleteCard from './common/DeleteCard'
import Context from '../ContextWrapper'

const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return {type:(state.type="create")}
    case "edit":
      return {type:(state.type="edit")}
    case "delete":
      return {type:(state.type="delete")}
    case '':
      return {type:(state.type="")}
  }
}

function Mainpage() {
  const {email} = useContext(Context)
  const [activeCard, setActiveCard]=useState()
  const [cards, setCards]=useState([])
  const [filteredCards, setFilteredCards]=useState([])
  const [state, dispatch] = useReducer(reducer, {type:""})
  useEffect(()=>{
    setFilteredCards(cards.filter((card)=>card.author === email))
    console.log(cards)
  }, [cards])

  return (
    <div className={`${state.type?"overflow-hidden":null} h-screen`}>
      <Navigation/>
      <button className='bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 ml-[68px] mt-[20px] '
      onClick={(e)=>{
        dispatch({ type: 'create' });
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
              dispatch={dispatch}/>

            )
          ):(
            <p className='text-center col-span-3 mt-10'>No cards found</p>
          )
        }
        
      </div>
      
      {state.type ==="create" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <CreateCard dispatch={dispatch} email={email} setCards={setCards} />
        </div>
      )}
      {state.type ==="edit" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <EditCard
           dispatch={dispatch}
           setCards={setCards}
           cards ={cards}
           activeCard={activeCard}/>
        </div>
      )}
      {state.type ==="delete" && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <DeleteCard 
            dispatch={dispatch} 
            cards={cards} 
            activeCard={activeCard} 
            setCards={setCards}/>
        </div>
      )}
      
      
    </div>
  )
}

export default Mainpage