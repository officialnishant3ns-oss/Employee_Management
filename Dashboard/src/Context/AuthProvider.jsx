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

import React, { createContext,useEffect, useState } from 'react'
import { SetlocalStorageData, GetlocalStorageData } from '../LocalStorage/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {


  useEffect(() => {
    SetlocalStorageData()
  }, [])
  
  const [userData, setUserData] = useState(() => GetlocalStorageData())

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
