import React,{useState} from 'react';
import './signup.css';
import {Link,RedirectFunction} from 'react-router-dom';
import SplitButtonSI from 'components/SplitButtonSI'
import sign from './signIn.svg'
function ForgotPasswordAdmin() {
   const[next,setNext] = useState(false);
    const [id,setId] = useState(-1)
    const [password,setPassword] = useState("")
    const [response,setResponse] = useState("-2")
function handleClick(e){
    e.preventDefault()
        const requestOptions = {
            method: 'PUT'
            
               
            }
        
        const url = "http://localhost:8080/api/v1/admin/"+id+"?password="+password
        fetch(url,requestOptions)
        .then(response => {return response.json()})
        .then(data => {
            console.log(data)   
            setResponse(data);
            console.log(response)
        });
}
function handleId(e){
    setId(e.target.value)
}
function handlePassword(e){
    setPassword(e.target.value)
}
function handleCl(e){
    e.preventDefault()
    setNext(true)
}
    

    return (
        <div className="signup__body">
        <div class="container">
        <div class="login-left">
            <div class="login-header">
                <h1>Welcome to SmartMart</h1>
                <p>Please login to use the platform</p>
            </div>
            <div>
                
            </div>
            <form class="login-form" autocomplete="off" onSubmit={next ? handleClick : handleCl}>
                <div class="login-form-content">
                <div>
                {/* <SplitButtonSI index={0}></SplitButtonSI> */}
                </div>
                   {
                    !next&& <div class="form-item">
                        <label for="emailForm">Enter User Id</label>
                        <input type="text" id="emailForm" onChange={handleId}/>
                    </div>
                   } 
                    
                  {next && <div className="login-form-content"><div class="form-item">
                        <label for="emailForm">Enter New Password</label>
                        <input type="password" id="emailForm" onChange={handlePassword}/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Re-Enter New Password</label>
                        <input type="password" id="passwordForm" onChange={handlePassword}/>
                    </div></div>}  
                    {/* <a href=""><p>Forgot Password?</p></a>
                    <div class="form-item">
                        <div class="checkbox">
                            <input type="checkbox" id="rememberMeCheckbox" checked/>
                            <label class="checkboxLabel" for="rememberMeCheckbox">Remember me</label>
                        </div>
                    </div> */}
                    
                    <div>
                    {response<1 ?<p>Don't have an account?
                    <Link to="/signup/customer">    Sign Up</Link>
                    </p> : <p className='success'>Password Changed Successfully</p>}
                </div>
                    <button className="signup__button" type="submit" >{!next? "Next" : "Change Password"}</button>
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

export default ForgotPasswordAdmin
