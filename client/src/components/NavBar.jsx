import React from "react";
import Links from "./Links";
import SearchBar from "./SearchBar";
import "../pages/Style/NavBar.css";

function NavBar() {
  return (
    <div className={"nav-container"}>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <Links />
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
