import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/Employee'
import Admin from './Components/Dashboard/Admin'
import { AuthContext } from './Context/AuthProvider'


function App() {
  const authdata = useContext(AuthContext)
  // console.log(authdata.employeeData[1].tasks[2])

  const [userRole, setUserRole] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

//  useEffect(() => {
//     if (authdata) {
//       const LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'))
//       // if (LoggedInUser) {
//       //   setUserRole(LoggedInUser.role)
//       // }
//        if (LoggedInUser) {
//       setUserRole(LoggedInUser)
//       // setLoggedInUserData(LoggedInUser)
//     }
//     }
//   }, [])



  const handleLogin = (email, password) => {
    if (email == 'admin@company.com' && password == '123') {
      setUserRole({role:'admin'})
      
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
    }

    else if (authdata) {
      const employee = authdata.employeeData.find((e) => email == e.email && password == e.password)
      if (employee) {

        setUserRole({role:'employees'})
        setLoggedInUserData(employee)
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employees' }))

      }
    }
    else {
      alert("Invalid Credential")
    }
  }

  return (

 <>
      {!userRole && <Login handleLogin={handleLogin} />}
      {userRole?.role === "admin" && <Admin />}
      {userRole?.role === "employees" && <Employee data={LoggedInUserData}  />}
    </>
)
  
}

export default App
