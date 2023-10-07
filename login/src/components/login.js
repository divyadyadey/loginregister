import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Welcome from './wel';

export default function Login() {
  
  const history=useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  //const navigate=useNavigate();
  async function handle(e)
  {

      e.preventDefault();
      
      try
      {
          await axios.post("http://localhost:5000/login",{
            email,password
          })
          .then(res=> {
              if(res.data==="exists"){
                  alert('login successful')
                  //history("/wel",{state:{id:email}})
                  //history("http://localhost:53419/")
                  window.location = ('http://localhost:56707/') 

              }
              else if(res.data==="does not exist"){
                alert("User has not registered")
              }
          })
          .catch(e=>{
            alert("wrong details")
            console.log(e);
          })
      }

      catch(e)
      {
        console.log(e);
      }
  }
  return(
    <div className='login'> 
        <div class="background">
          <div class="shap"></div>
          <div class="shap"></div>
        </div>
        <form className='login_form'>
          <h3>Login</h3>

          <label for="email">Email</label>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}}
           name="email" id="email" placeholder='Enter email' required />

          <label for="password">Password</label>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} 
              name="pass" placeholder='Enter password' required />

          <br></br>
          <button type='submit' onClick={handle}>Login</button>
          <br></br><br></br>
          <p className="forgot-password text-right">
          Have not registered? <a href="/register">Sign Up</a></p>
        </form>
    </div>
   
  )
}