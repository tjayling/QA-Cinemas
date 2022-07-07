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
      <div className="movie-container" key={movie._id}>
        <img src={movie.img_link} alt={`${movie.title} cover`} width="200px" />
        <div className="movie-data-container">
          <h3>{movie.title}</h3>
          <h4>Featuring {movie.actors}</h4>
          <p>{movie.description}</p>
        </div>
      </div>
    );
  });
};

export default MovieFormat;
