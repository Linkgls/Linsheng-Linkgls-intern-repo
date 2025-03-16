// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Test from "./Test";
import HelloWorld from "./HelloWorld";
import "./output.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/hello" element={<HelloWorld />} />
      </Routes>
    </Router>
  );
};

export default App;
