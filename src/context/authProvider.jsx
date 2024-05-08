import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';
// creating context
export const Authcoxtext=createContext();

// getting all children
export const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    // user functions in AuthProvider as center
    const createUser=(email,password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LogInMethord=(email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email, password)
    }
    // log out methord
    const LogOut=()=>{
        setLoading(false)
        return signOut(auth)
    }
    // objarbing user changes 
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,crrentUser=>{
            setUser(crrentUser)
            // console.log(crrentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])
    // value we went to send
    const authInfo={
        user,loading,setUser,createUser,LogInMethord,LogOut
    }
  return (
    // celling context
   <Authcoxtext.Provider value={authInfo}>
        {children}
   </Authcoxtext.Provider>
  )
}

export default AuthProvider
