import React, {useState} from 'react';
import './register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Registration() {

    const history=useNavigate();

    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    //const navigate=useNavigate();
    async function handle(e)
    {
      
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/register",{
              firstname,lastname,email,password
            })
            .then(res=> {
              if(res.data==="exists"){
                alert("User already exists")
              }
              else if(res.data==="does not exist"){
                history("/wel",{state:{id:email}})
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

      <div> 
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form>
            <h3>Sign Up</h3>

            <label className="form__label" for="firstName">First Name: </label>
            <input onChange={(e)=>{setFirstname(e.target.value)}}
            className="form__input" type="text" id="firstName" placeholder="Enter First Name"/>

            <label className="form__label" for="lastName">Last Name: </label>
            <input onChange={(e)=>{setLastname(e.target.value)}}
            type="text" id="lastName"  className="form__input" placeholder="Enter LastName"/>
            
            <label className="form__label" for="email">Email: </label>
            <input onChange={(e)=>{setEmail(e.target.value)}}
            type="email" id="email" className="form__input" placeholder="Enter Email"/>

            <label className="form__label" for="password">Password: </label>
            <input onChange={(e)=>{setPassword(e.target.value)}}
            className="form__input" type="password"  id="password" placeholder="Enter new password"/>

            <br></br>

            <button type="submit" onClick={handle}>Register</button>
            <br></br><br></br>
            <p> Already a user? <a href="/login">Log in</a></p>
        </form>

      </div>

  )       
}
export default Registration;