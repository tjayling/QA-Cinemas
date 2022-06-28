import React, { Component } from "react";
import Styled from "styled-components";
import Logo from "./Logo";
// import Links from "./Links";

const Container = Styled.div.attrs({ className: "nav-container" });
const Nav = Styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
});

const NavBar = () => {
  return (
    <Container>
      <Nav>
        <Logo />
      </Nav>
    </Container>
  );
};

export default NavBar;
