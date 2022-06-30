import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/index.js";
import Main from "./Main.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Main />
    </Router>
  );
}

export default App;
