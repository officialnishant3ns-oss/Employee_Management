import { useState } from 'react'

import './App.css'
import Login from './Pages/Auth/Login'
import Employee from './Pages/Dashboard/Employee'
import TaskList from './Pages/Others/TaskList'
import Header from './Pages/Others/Header'
import Admin from './Pages/Dashboard/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
//  <Login />
  // <Employee />
  <Admin />

  )
}

export default App
