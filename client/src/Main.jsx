import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Listings from "./pages/Listings.jsx";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/listings" component={Listings} />
      </Routes>
    </div>
  );
};

export default Main;
