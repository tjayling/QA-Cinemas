import React, { Component } from "react";
// import logo from "../logo.svg";
import logo from "../img/logo-icon250.png";

class Logo extends Component {
  render() {
    return (
      <a className={"navbar-brand"} href={"/home"}>
        <img
          src={logo}
          width={30}
          height={30}
          alt={"Home page"}
          style={{ filter: "invert(1)", marginLeft: "10px" }}
        />
      </a>
    );
  }
}

export default Logo;
