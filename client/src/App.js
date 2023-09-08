import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/register" element={<Register />} /> 
        </Routes>
    </>    
  );
}

export default App;