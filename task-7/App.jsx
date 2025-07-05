import './App'
import { Registration } from './Task2/Registration'
import {Login} from './Task2/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Home } from './Task2/Home'
function App() {
  

  return (
    <>
    < BrowserRouter>
     
     <Routes>
     <Route index element={<Registration/> }></Route>
     
    <Route path="/login" element={ <Login/>}></Route>
    <Route path="/home" element={ <Home/>}></Route>


     </Routes>
     </BrowserRouter>
      

    </>
  )
}

export default App
