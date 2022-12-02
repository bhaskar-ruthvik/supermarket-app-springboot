import Cart from "pages/Cart";
import HomePage from "pages/HomePage";
import Item from "pages/Item";
import SignIn from "pages/signup/SignIn";
import SignUp from "pages/signup/SignUp";
import React from "react";
import Admin from "pages/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "components/Header";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/item" element={<div><Header></Header><Item></Item></div>} />
      </Routes>
    </Router>
  );
}

export default App;
