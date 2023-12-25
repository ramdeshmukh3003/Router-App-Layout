import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import React, { useState } from "react";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
       <Route 
          path="/dashboard" 
          element={
          <PrivateRoute isLoggedIn={isLoggedIn} >

            <Dashboard />

          </PrivateRoute>
          
          } 
          />
       
  
      
      </Routes>
    </div>
  );
}

export default App;
