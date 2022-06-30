import React, { Component } from "react";
import logo from "../img/logo500.png";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.height = props.height;
    this.style = props.style;
  }

  render() {
    return (
      <div className={"navbar-brand"} href={"/home"}>
        <img
          src={logo}
          height={this.height}
          alt={"Home page"}
          style={this.style}
        />
      </div>
    );
  }
}

export default Logo;
