import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
