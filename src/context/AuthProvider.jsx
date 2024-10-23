import React, { createContext,useState,useEffect } from 'react'
import { getLocalStorage } from '../utlis/localStorage'
export const Authcontext =createContext()

const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null)

useEffect(() => {
    const {employees,admin} = getLocalStorage()
    setuserData({employees,admin})

}, [])








  return (
    <>
    <Authcontext.Provider value={userData}>
        {children}
    </Authcontext.Provider>
    </>
  )
}

export default AuthProvider