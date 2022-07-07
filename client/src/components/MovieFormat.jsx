import React from "react";
import { useEffect, useState } from "react";

const axios = require("axios");

const MovieFormat = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => setMovieData(response.data.data))
      .catch((error) => console.error(error));
  }, []);
  return movieData.map((movie) => {
    return (
      <div style={{ margin: "25px" }} key={movie._id}>
        <h2>{movie.title}</h2>
        <h5>Featuring {movie.actors}</h5>
        <img src={movie.img_link} alt={`${movie.title} cover`} width="200px" />
        <span>{movie.description}</span>
      </div>
    );
  });
};

export default MovieFormat;
