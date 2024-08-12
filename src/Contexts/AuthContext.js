import { createContext, useEffect, useState } from "react";
import Cookies from'js-cookie';



export const authContext=createContext()

export  function AuthContextProvider({children}){
    const [userIsLoggedIn,SetUserIsloggedIn]=useState(false)
    useEffect(()=>{
        if(Cookies.get('token')!=null)
            {
                SetUserIsloggedIn(true)
            }
    },[])
    return <authContext.Provider value={{userIsLoggedIn,SetUserIsloggedIn}}>
        {children}
    </authContext.Provider>
}