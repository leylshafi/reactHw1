import {useContext} from 'react'
import Mainpage from './mainpage/Mainpage'
import Login from './login/Login'
import Context from './ContextWrapper'
import { Navigate, Route, Routes } from 'react-router-dom'
import Details from './Details'
import NotFound from './NotFound'
function App() {

    const {authorized} = useContext(Context);

    return (
        <Routes>
           <Route path='/' element={<Navigate to="/login" replace/>}/>
           {authorized?(
                <Route path = "/mainpage" element={<Mainpage/>}/> 
           ):(
                <Route path = "/login" element={<Login/>}/>
           )}

           <Route path = "/details">
                <Route path=":message" element = {<Details/>}/>
           </Route>
           <Route path='*' element={<NotFound />}/>
        </Routes>
        
    )
}

export default App