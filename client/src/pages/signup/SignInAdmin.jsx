import React,{useState} from 'react';
import './signup.css';
import {Link} from 'react-router-dom';
import SplitButtonSI from 'components/SplitButtonSI'
import sign from './signIn.svg'
function SignInAdmin() {
  
    const [id,setId] = useState(-1)
    const [password,setPassword] = useState("")
    const [response,setResponse] = useState("-2")
    let show = false;
function handleClick(e){
    e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": id,
                "password": password
                
            
               
            })
        };
        fetch("http://localhost:8080/api/v1/admin/signin",requestOptions)
        .then(response => {return response.json()})
        .then(data => {
            console.log(data)   
            setResponse(data);
            window.localStorage.setItem("signin", data)
            if(data){
                
                window.location.replace("http://localhost:3000/admin")
            }
        });
}
function handleId(e){
    setId(e.target.value)
}
function handlePassword(e){
    setPassword(e.target.value)
}
    return (
        <div className="signup__body">
        <div class="container">
        <div class="login-left">
            <div class="login-header">
                <h1>Welcome to SmartMart</h1>
                <p>Please login to use the platform</p>
            </div>
            <form class="login-form" autocomplete="off" onSubmit={handleClick}>
                <div class="login-form-content">
                <div>
                <SplitButtonSI index={2}></SplitButtonSI>
                </div>
                    <div class="form-item">
                        <label for="emailForm">Enter User Id</label>
                        <input type="text" id="emailForm" onChange={handleId}/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Password</label>
                        <input type="password" id="passwordForm" onChange={handlePassword}/>
                    </div>
                    <Link to="/forgotpassword/admin">Forgot Password?</Link>
                    <div class="form-item">
                        <div class="checkbox">
                            <input type="checkbox" id="rememberMeCheckbox" checked/>
                            <label class="checkboxLabel" for="rememberMeCheckbox">Remember me</label>
                        </div>
                    </div>
                    <div>
                    <p>Don't have an account?
                    <Link to="/signup">    Sign Up</Link>
                    </p>
                </div>
                    <button className="signup__button" type="submit">Sign In</button>
                </div>
            </form>
        </div>
        <div class="login-right">
            <img src={sign} alt="image"/>
        </div>
    </div>  
    </div>
    );
}

export default SignInAdmin
