import { useState } from 'react'

import './App.css'
import Login from './Pages/Auth/Login'
import Employee from './Pages/Dashboard/Employee'

function App() {
  const [count, setCount] = useState(0)

  return (
//  <Login />
  <Employee />
  )
}

export default App
