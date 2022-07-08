import React from "react";
import { Link } from "react-router-dom";
import MovieFormat from "../components/MovieFormat.jsx";

const Movies = () => {
  return (
    <div>
      <h1 className="page-title">Movies</h1>
      {MovieFormat()}
      <h2>Classification</h2>
      <p>
        For information about the different classifcation guide click{" "}
        <Link to="/classification">here</Link>
      </p>
    </div>
  );
};

export default Movies;
