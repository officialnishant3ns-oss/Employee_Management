import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import Admin from './Components/Dashboard/Admin'
import { AuthContext } from './Context/AuthProvider'

function App() {
const authdata = useContext(AuthContext)
console.log(authdata.employeeData[0].email)

  const [userRole, setUserRole] = useState()
  const handleLogin = (email, password) => {
    if (email == 'admin@company.com' && password == '123') {
      setUserRole('admin')
      console.log("This is admin")
    }
    else if (authdata.employeeData.find(e=>{ e.email=== email && e.password=== password}) {
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
