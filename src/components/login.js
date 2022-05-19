import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  const handleSubmit=()=>{
    if(username === 'admin' && password === 'admin'){
     navigate('/dashboard')
    }else{
       window.alert('Login credentials wrong!')
    }

  }

  return(
    <div className="loginArea">
   <h1>Please log in</h1>
   <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password"  onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    
</div>

  )
}