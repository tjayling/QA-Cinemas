import React from "react";
import MovieFormat from "../components/MovieFormat.jsx";
const axios = require("axios");

const Movies = () => {
  return <div>
    <h1>Movies</h1>
    {MovieFormat()}
    </div>;
};

export default Movies;
