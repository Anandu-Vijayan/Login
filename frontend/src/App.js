import React from 'react'
import Login from './component/Login/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from './component/Landing/Landing'
import Signup from './component/Signup/Signup'
import AdminHeader from './component/Admin/AdminHeader/AdminHeader'
import AdminLogin from './component/Admin/AdminLogin/AdminLogin'

const App = () => {
  return (
<>
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={ <Landing/> }exact/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<AdminHeader/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>

        </Routes>
      
   
    </BrowserRouter>
    </>
  )
}

export default App