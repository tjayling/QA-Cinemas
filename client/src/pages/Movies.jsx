import React from "react";
import MovieFormat from "../components/MovieFormat.jsx";
const axios = require("axios");

const Movies = () => {
  return <div>{MovieFormat()}</div>;
};

export default Movies;
