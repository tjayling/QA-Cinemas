import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/index.js";
import Main from "./Main.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Stylesheet from "./pages/Stylesheet.js";



function App() {
  return (
    <Router>
      <NavBar />
      <Stylesheet/>
      <Main />
    </Router>
  );
}

export default App;
