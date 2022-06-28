import React, { Component } from "react";
import Styled from "styled-components";
import logo from "../logo.svg";

const Wrapper = Styled.a.attrs({ className: "navbar-brand" });

class Logo extends Component {
  render() {
    return (
      <Wrapper href={"/home"}>
        <img src={logo} width={"50"} height={"50"} alt={"Home page"} />
      </Wrapper>
    );
  }
}

export default Logo;
