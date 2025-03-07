import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import FolderSelection from "./FolderSelection";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-dashboard" element={<FolderSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
