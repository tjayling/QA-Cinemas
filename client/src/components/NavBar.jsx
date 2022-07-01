import React from "react";
 import Links from "./Links";


function NavBar() {
  return (
    <div className={"nav-container"}>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
       
        <Links />
      </nav>
    </div>
  );
}

export default NavBar;
