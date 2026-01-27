import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import Admin from './Components/Dashboard/Admin'
import { AuthContext } from './Context/AuthProvider'

function App() {
const authdata = useContext(AuthContext)
console.log(authdata.employeeData)

  const [userRole, setUserRole] = useState()
  const handleLogin = (email, password) => {
    if (email == 'admin@company.com' && password == '123') {
      setUserRole('admin')
      console.log("This is admin")
    }
    else  if (authdata && authdata.employeeData.find((e)=> email ==e.email && password == e.password)){
      setUserRole('Employees')
      console.log("This is Employee")
    }
    else {
      alert("Invalid Credential")
    }
  }

  return (
    <>
     {!userRole && <Login handleLogin={handleLogin} />}
      {userRole === "admin" && <Admin />}
      {userRole === "Employees" && <Employee />}


    </>
  )
}

export default App
