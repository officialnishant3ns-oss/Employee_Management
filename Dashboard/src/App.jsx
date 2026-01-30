import { useContext, useEffect, useEffectEvent, useState } from 'react'

import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import Admin from './Components/Dashboard/Admin'
import { AuthContext } from './Context/AuthProvider'


function App() {
  const authdata = useContext(AuthContext)
  // console.log(authdata.adminData[0].name)

  const [userRole, setUserRole] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const LoggedInUser = localStorage.getItem('LoggedInUser')
    // console.log(LoggedInUser)

    if (LoggedInUser) {
      const userData = JSON.parse(LoggedInUser)

      setUserRole(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])




  const handleLogin = (email, password) => {
    if (email == 'admin@company.com' && password == '123') {
      // const adminData = authdata?.adminData[0]



      // if (adminData) {
        setUserRole('admin')
        // setLoggedInUserData(adminData)

        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
        return
      // }

    }

    else if (authdata) {
      const employee = authdata?.employeeData?.find((e) => email == e.email && password == e.password)
      if (employee) {

        setUserRole('employees')
        setLoggedInUserData(employee)
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employees', data: employee }))
        return
      }
    }
    else {
      alert("Invalid Credential")
    }
  }

  return (

    <>
      {!userRole && <Login handleLogin={handleLogin} />}

      {userRole === "admin" && <Admin data={LoggedInUserData} />}

      {userRole === "employees" && (<Employee data={LoggedInUserData} />)}

    </>
  )

}

export default App
