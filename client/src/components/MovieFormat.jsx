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
        <img class="item2" src={movie.img_link} alt={`${movie.title} cover`} width="200px" />
        <h5 class="item3">{movie.title}</h5>
        <h5 class="item5">Featuring {movie.actors}</h5>
        <h5 class="item6">{movie.description}</h5>
      </div>
    );
  });
};

export default MovieFormat;
