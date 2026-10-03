import { useState,createContext, useEffect } from "react";
export const AuthContext=createContext();
export default function AuthProvider({children}){
    const [user,setUser]=useState([]);
    const [token,setToken]=useState(localStorage.getItem("token"));
    const login=(accessToken)=>{
        setToken(accessToken);
        localStorage.setItem("token",accessToken);
       
    }
    const logout =()=>{
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
    }
    return (
        <AuthContext.Provider value={{user,token,login,logout,setToken}}>
          {children}
        </AuthContext.Provider>
    )

}