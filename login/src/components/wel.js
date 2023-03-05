import React, { useEffect, useState } from "react";
import './wel.css';
import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Welcome({userData})
{
    const [data,setdata]=useState([]);

    useEffect (()=>{
        fetch("http://localhost:5000/wel",{
            method:'GET',
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userdata");
            setdata(data.data);
        });
    },[]);

    const location=useLocation();
    return(
        
        <div className="auth-wrapper">
            <div className="auth-inner" style={{width:"auto"}}>
                <h3 style={{textAlign:"center"}}>Welcome {location.state.id} </h3>
                <Table striped bordered success hover style={{width:500}}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(i=>{
                            return(
                                <tr>
                                    <td>{i.firstname}</td>
                                    <td>{i.lastname}</td>
                                    <td>{i.email}</td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default Welcome;