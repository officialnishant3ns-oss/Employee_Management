import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import Admin from './Components/Dashboard/Admin'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [userRole, setUserRole] = useState()
  const handleLogin = (email, password) => {
    if (email == 'admin@company.com' && password == '123') {
      setUserRole('admin')
      console.log("This is admin")
    }
    else if (email == 'employee@company.com' && password == '123') {
      setUserRole('Employees')
      console.log("This is Employee")
    }
    else {
      alert("Invalid Credential")
    }
  }

const data = useContext(AuthContext)
console.log(data)
  return (
    <>
     {!userRole && <Login handleLogin={handleLogin} />}
      {userRole === "admin" && <Admin />}
      {userRole === "Employees" && <Employee />}


    </>
  )
}

export default App
