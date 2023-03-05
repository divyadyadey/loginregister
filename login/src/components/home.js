import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';
function Home()
{
    const navigate=useNavigate();
    function handleClick1()
    {
        navigate('/login')
    }
    function handleClick2()
    {
        navigate('/register')
    }
    return(
        <div className="home" >
            <h2>Home page</h2>
            <br></br>
            <h4> Already a user ?</h4>
            <button type="button"  onClick={handleClick1} > Login</button>
            <br></br>
            <h4> New user?</h4>
            <button type="button" onClick={handleClick2}> Register</button>
        </div>
    );
}
export default Home;