import { useEffect, useState } from 'react'

import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import TaskList from './Components/Others/TaskList'
import Header from './Components/Others/Header'
import Admin from './Components/Dashboard/Admin'

function App() {

  useEffect(()=>{
    SetlocalStorageData()
  },[])

  return (
    <>
  {/* <Login /> */}
 {/* <Employee /> */}
  <Admin />
</>
  )
}

export default App
