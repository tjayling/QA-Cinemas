import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.js";
import Movies from "./pages/movies.js";
import Listings from "./pages/listings.js";

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
