import React from "react";
import MovieFormat from "../components/MovieFormat.jsx";
const axios = require("axios");

const Movies = () => {
  return <div>
    <h1>Movies</h1>
    {MovieFormat()}
    <h2>Classification</h2>
    <p>For information about the different classifcation guide click here</p>
    </div>;
};

export default Movies;
