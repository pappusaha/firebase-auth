import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup ,FacebookAuthProvider,onAuthStateChanged ,signOut  } from '@firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const DataContext=createContext()
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)

    const googleProvider=new GoogleAuthProvider();
    const faceBookProvider = new FacebookAuthProvider();
const registerUser =(email, password) => {
 return   createUserWithEmailAndPassword(auth, email, password)
  
}
const logInUser=(email,password)=>{
    return  signInWithEmailAndPassword(auth, email, password)
}
const googleLogin=( )=> {
return signInWithPopup(auth, googleProvider)
}
const facebookLogin=()=> {
    return signInWithPopup(auth,faceBookProvider )
}

const logOut =() =>{
   return  signOut(auth)
    
    
}


const authInfo={
    registerUser,
    logInUser, 
    setUser, 
    user, 
    googleLogin, 
    facebookLogin, 
    logOut
}
useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
     setUser(currentUser)
        } else {
            setUser(null)
        }
      });
return ()=> {
    unsubscribe()
}
},[])
   
    return (
        <div>
            <DataContext.Provider value={authInfo}> 
                {children}
                </DataContext.Provider>
        </div>
    );
};

export default AuthProvider;