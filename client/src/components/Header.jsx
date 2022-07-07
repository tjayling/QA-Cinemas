import React, { Component } from "react";
import logo from "../img/logo500.png";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt={"Main Logo"} />
      </div>
    );
  }
}

export default Header;
