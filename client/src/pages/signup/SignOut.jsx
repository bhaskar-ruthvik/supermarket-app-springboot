import React,{useState} from 'react';
import './signup.css';
import {Link,RedirectFunction} from 'react-router-dom';
import SplitButtonSI from 'components/SplitButtonSI'
import sign from './signIn.svg'
function SignOut() {
   
    window.localStorage.setItem('signin',false);

    return (
        <div className="signup__body">
        <div class="container">
        <div class="login-left">
            <div class="login-header">
                <h1>Welcome to <Link to="/">SmartMart</Link></h1>
                <p>Please login to use the platform</p>
            </div>
            <form class="login-form" autocomplete="off">
                <div class="login-form-content">
                <div>
                {/* <SplitButtonSI index={0}></SplitButtonSI>
                </div>
                    <div class="form-item">
                        <label for="emailForm">Enter User Id</label>
                        <input type="text" id="emailForm" onChange={handleId}/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Password</label>
                        <input type="password" id="passwordForm" onChange={handlePassword}/>
                    </div>
                    <a href=""><p>Forgot Password?</p></a>
                    <div class="form-item">
                        <div class="checkbox">
                            <input type="checkbox" id="rememberMeCheckbox" checked/>
                            <label class="checkboxLabel" for="rememberMeCheckbox">Remember me</label>
                        </div>
                    </div>
                    <div>  */}
                    <p>You have signed out successfully!
                    
                    </p>
                </div>
                <Link to="/signin/customer"><button className="signup__button" type="submit">Sign In</button></Link>
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

export default SignOut
