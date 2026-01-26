import React, { useEffect } from 'react'
import { GetlocalStorageData } from '../LocalStorage/LocalStorage'

const AuthContext = ({children}) => {
  // useEffect(()=>{
  //   GetlocalStorageData()
  // })
  return (
    <div>
     {children}
      
    </div>
  )
}

export default AuthContext
