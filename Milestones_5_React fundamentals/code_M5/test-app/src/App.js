// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Test from "./Test";
import HelloWorld from "./HelloWorld";
import ParentBuggy from "./DerivedStateBuggy";
import ParentFixed from "./DerivedStateFixed";
import "./output.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/buggy" element={<ParentBuggy />} />
        <Route path="/fixed" element={<ParentFixed />} />
      </Routes>
    </Router>
  );
};

export default App;
