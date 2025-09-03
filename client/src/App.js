import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chefs from "./pages/Chefs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Home Chef Marketplace</h1>} />
        <Route path="/chefs" element={<Chefs />} />
      </Routes>
    </Router>
  );
}

export default App;
