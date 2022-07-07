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

<<<<<<< HEAD
        <img class="item1" src={movie.img_link} alt={`${movie.title} cover`} width="200px" />

        <div class="movie-text">
        <h5 class="item2">{movie.title}</h5>
        <h6 class="item3">Featuring {movie.actors}</h6>
        <h6 class="item4">{movie.description}</h6>
=======
        <div className="movie-data-container">
          <h3>{movie.title}</h3>
          <h4>Featuring {movie.actors}</h4>
          <p>{movie.description}</p>
>>>>>>> 9b2dc9e99213e2bebd4cb0d5f894b94fd774c811
        </div>
      </div>
    );
  });
};

export default MovieFormat;
