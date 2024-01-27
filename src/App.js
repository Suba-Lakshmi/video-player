import React from "react";
import "./App.css";
import Login from "./components/Login";
import Display from "./components/Display";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
