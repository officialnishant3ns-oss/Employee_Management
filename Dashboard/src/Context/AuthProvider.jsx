// import React, { createContext, useEffect, useState } from 'react'
// import { SetlocalStorageData, GetlocalStorageData } from '../LocalStorage/LocalStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({ children }) => {



//   const [userData, setUserData] = useState(null)

//     useEffect(() => {
//     SetlocalStorageData()   safe for there for rendering

//  setUserData( GetlocalStorageData())
//   }, [])


//   return (
//     <AuthContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider


//m-2
// import React, { createContext,useEffect, useState } from 'react'
// import { SetlocalStorageData, GetlocalStorageData } from '../LocalStorage/LocalStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({ children }) => {


//   useEffect(() => {
//     SetlocalStorageData()
//   }, [])
  
//   const [userData, setUserData] = useState(() => GetlocalStorageData())

//   return (
//     <AuthContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider

import React, { createContext, useEffect, useState } from 'react'
import { SetlocalStorageData, GetlocalStorageData } from '../LocalStorage/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  useEffect(() => {
    SetlocalStorageData()
  }, [])

  const { employees, admin } = GetlocalStorageData()

  const [employeeData, setEmployeeData] = useState(employees)
  const [adminData, setAdminData] = useState(admin)

  return (
    <AuthContext.Provider value={{
      employeeData,
      setEmployeeData,
      adminData,
      setAdminData
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
