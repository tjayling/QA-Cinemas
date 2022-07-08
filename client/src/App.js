import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Main from "./Main.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
