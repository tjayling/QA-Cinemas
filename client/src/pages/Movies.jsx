import React from "react";
import { Link } from "react-router-dom";
import MovieFormat from "../components/MovieFormat.jsx";

const Movies = () => {
  return (
    <div>
      <h1 className="page-title">Movies</h1>
      {MovieFormat()}
      <Link to="/classification">Our guide to age ratings</Link>
    </div>
  );
};

export default Movies;
