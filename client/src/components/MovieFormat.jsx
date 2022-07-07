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
      <div class="grid-container" key={movie._id}>

        <img class="item1" src={movie.img_link} alt={`${movie.title} cover`} width="200px" />

        <div class="movie-text">
        <h5 class="item2">{movie.title}</h5>
        <h6 class="item3">Featuring {movie.actors}</h6>
        <h6 class="item4">{movie.description}</h6>
        </div>
      </div>
    );
  });
};

export default MovieFormat;
