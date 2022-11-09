import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom';

function SignUp() {
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
                        <label for="passwordForm">Enter Name</label>
                        <input type="text" id="passwordForm"/>
                    </div>
                    <div class="form-item">
                        <label for="emailForm">Enter Email</label>
                        <input type="text" id="emailForm"/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Password</label>
                        <input type="password" id="passwordForm"/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Phone Number</label>
                        <input type="text" id="passwordForm"/>
                    </div>
                    <div class="form-item">
                        <label for="passwordForm">Enter Address</label>
                        <input type="text" id="passwordForm"/>
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
