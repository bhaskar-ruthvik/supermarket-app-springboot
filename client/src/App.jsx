import Cart from "pages/Cart";
import HomePage from "pages/HomePage";
import Item from "pages/Item";
import SignIn from "pages/signup/SignIn";
import SignUpManager from "pages/signup/SignUpManager"
import SignInManager from "pages/signup/SignInManager"
import SignUpAdmin from "pages/signup/SignUpAdmin"
import SignInAdmin from "pages/signup/SignInAdmin"
import SignUp from "pages/signup/SignUp";
import MainPage from "pages/MainPage"
import React,{useEffect} from "react";
import Admin from "pages/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "components/Header";
import SignOut from "pages/signup/SignOut";
function App() {

 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/signup/customer" element={<SignUp/>} />
        <Route path="/signup/admin" element={<SignUpAdmin/>} />
        <Route path="/signup/manager" element={<SignUpManager/>} />
        <Route path="/signin/customer" element={<SignIn/>} />
        <Route path="/signin/manager" element={<SignInManager/>} />
        <Route path="/signin/admin" element={<SignInAdmin/>} />
        <Route path="/signout" element={<SignOut/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/item" element={<div><Header></Header><Item></Item></div>} />
      </Routes>
    </Router>
  );
}

export default App;
