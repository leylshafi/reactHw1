import {useContext} from 'react'
import Mainpage from './mainpage/Mainpage'
import Login from './login/Login'
import Context from './ContextWrapper'

function App() {
    const {authorized} = useContext(Context);
    return authorized? <Mainpage/>:<Login/>;
}

export default App