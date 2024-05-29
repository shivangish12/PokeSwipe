import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <Welcome />
      </div>
    </Router>
  );
}

export default App;
