import React from "react";
import Links from "./Links";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className={"nav-container"}>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <Links />
        <SearchBar />
      </nav>
    </div>
  );
}

export default NavBar;
