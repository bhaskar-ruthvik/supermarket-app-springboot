import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom';

function SignIn() {
    return (
        <div className="signup__body">
        <div class="container">
        <div class="login-left">
            <div class="login-header">
                <h1>Welcome to SmartMart</h1>
                <p>Please login to use the platform</p>
            </div>
            <form class="login-form" autocomplete="off">
                <div class="login-form-content">
                    <div class="form-item">
                        <label for="emailForm">Enter Email</label>
                        <input type="text" id="emailForm"/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Password</label>
                        <input type="password" id="passwordForm"/>
                    </div>
                    <a href=""><p>Forgot Password?</p></a>
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
            <img src="./signUp.svg" alt="image"/>
        </div>
    </div>  
    </div>
    );
}

export default SignIn
