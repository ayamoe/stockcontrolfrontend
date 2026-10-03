import { useState } from "react";
import { useNavigate } from "react-router-dom"
import {authLogin} from "../Services/authService"
import "./style.css"
import { useAuth } from "../Hooks/useAuth";

export default function login(){
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const {login}=useAuth();
    const navigate =useNavigate();
    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
          const data= await authLogin(username,password);
           
            localStorage.setItem("token",data.token);
            login(data.token);
            console.log(data.token);
            navigate("/dashboard");
        }catch(error){
            console.error(error);
            alert(error.message);
        }
    };
    return (
      <div className="login-page">
      <div className="login-card">

        <div className="login-title">
          <h1>Stock Control</h1>
          <p>Sign in to your account</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
    )
    
}