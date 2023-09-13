import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Compose from "./Pages/Compose";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth isRegister={false} />} />
            <Route path="/register" element={<Auth isRegister={true} />} /> 
            <Route path="/compose" element={<Compose />} />
        </Routes>
    </>    
  );
}

export default App;
