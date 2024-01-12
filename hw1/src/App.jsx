import {useState} from 'react'
import Mainpage from './mainpage/Mainpage'
import Login from './login/Login'

function App() {
  const [authorized, setAuthorized] = useState(false)
  const [email,setEmail] = useState("")
  return authorized?<Mainpage setAuthorized = {setAuthorized} authorized = {authorized} email={email} />: <Login setAuthorized = {setAuthorized} setEmail={setEmail} email={email}/>;
     
}

export default App