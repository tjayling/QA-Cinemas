import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="navbar-brand">
          <Logo
            height={50}
            style={{ filter: "invert(1)", marginLeft: "10px" }}
          />
        </Link>
        <div className="collpase navbar-collapse">
          <div className="navbar-nav mr-auto">
            <div className="collpase navbar-collapse">
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
            </div>
            <div className="collapse navbar-collapse">
              <Link to="/listings" className="nav-link">
                Playing Now
              </Link>
            </div>
            <div className="collapse navbar-collapse">
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </div>
            <div className="collapse navbar-collapse">
              <Link to="/forum" className="nav-link">
                Discussions
              </Link>
            </div>
            <div className="collapse navbar-collapse">
              <Link to="/contact" className="nav-link">
                Contact us
              </Link>
            </div>
            <div className="collapse navbar-collapse">
              <Link to="/screens" className="nav-link">
                Our Screens
              </Link>
            </div>
            <div className="collapse navbar-collapse">
              <Link to="/places" className="nav-link">
                Places nearby
              </Link>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Links;
