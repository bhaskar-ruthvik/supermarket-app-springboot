import HomePage from "pages/HomePage";
import SignIn from "pages/signup/SignIn";
import SignUp from "pages/signup/SignUp";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
