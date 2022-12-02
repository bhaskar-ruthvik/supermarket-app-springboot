import React, { useState, useEffect } from 'react'
import './signup.css'
import {Link} from 'react-router-dom';

function SignUp() {
    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/customer")
        .then(response =>{
           return response.json()
        }).then(data=>{
          console.log(data)
        })
    },[])
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [no,setNo] = useState("");
    const [address,setAddress] = useState("");
    const [response,setResponse] = useState();
    function handleName(e){
        setName(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleAddress(e){
        
        setAddress(e.target.value);
        
    }
    function handleNo(e){
        setNo(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
        
    }
    function handleClick(e){
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": name,
                "phoneNumber": no,
                "email": email,
                "address": address,
                "password": password,
                "account_balance": 1000.0
            
               
            })
        };
        fetch("http://localhost:8080/api/v1/customer",requestOptions)
        .then(response => {return response.json()})
        .then(data => {
            console.log(data)   
            setResponse(data);
            console.log(response);
        });
        const arr = document.getElementsByTagName("input")    
        for(let i=0;i<arr.length;i++){
            arr[i].value = ""
        }
      
    }
    return (
        <div className="signup__body">
        <div class="container">
        <div class="login-left">
            <div class="login-header">
                <h1>Welcome to SmartMart</h1>
                <p>Please Register to use the platform</p>
            </div>
            <form class="login-form" autocomplete="off" onSubmit={handleClick}>
                <div class="login-form-content">
                    <div class="form-item">
                        <label for="passwordForm">Enter Name</label>
                        <input type="text" id="passwordForm" onChange={handleName}/>
                    </div>
                    <div class="form-item">
                        <label for="emailForm">Enter Email</label>
                        <input type="text" id="emailForm" onChange={handleEmail}/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Password</label>
                        <input type="password" id="passwordForm" onChange={handlePassword}/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Phone Number</label>
                        <input type="text" id="passwordForm" onChange={handleNo}/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Address</label>
                        <input type="text" id="passwordForm" onChange={handleAddress}/>
                    </div>
                    <button className="signup__button" type="submit">Sign Up</button>
                </div>
                <div>
                    <p>Already registered?       
                    <Link to="/signin">    Sign In</Link>
                    </p>
                </div>
                {/* <div class="login-form-footer">
                    <a href="#">
                        <img width="30"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"/>
                        Google Login
                    </a>
                </div> */}
            </form>
        </div>
        <div class="login-right">
            <img src="./signIn.svg" alt="image"/>
        </div>
    </div>  
    </div>
    );
}

export default SignUp
