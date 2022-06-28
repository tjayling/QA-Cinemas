import React from "react";
import Logo from "./Logo";
import Links from "./Links";

function NavBar() {
  return (
    <div className={"nav-container"}>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <Logo />
        <Links />
      </nav>
    </div>
  );
}

export default NavBar;
