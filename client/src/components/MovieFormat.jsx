import React from "react";
import { useEffect, useState } from "react";
import "../pages/Style/Movies.css";

const axios = require("axios");

const MovieFormat = (id) => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    id
      ? axios
          .get(`http://localhost:3000/movies/${id}`)
          .then((response) => setMovieData([...movieData, response.data.data]))
          .catch((error) => console.error(error))
      : axios
          .get("http://localhost:3000/movies")
          .then((response) => setMovieData(response.data.data))
          .catch((error) => console.error(error));
  }, []);
  return movieData.map((movie) => {
    return (
      <div className="movie-container" key={movie._id}>
        <img
          className="movie-cover-img"
          src={movie.img_link}
          alt={`${movie.title} cover`}
          width="200px"
        />
        <div className="movie-data-container">
          <h2 className="movie-title">{movie.title}</h2>
          <h4 className="movie-data">Featuring {movie.actors}</h4>
          <p className="movie-data">{movie.description}</p>
        </div>
      </div>
    );
  });
};

export default MovieFormat;
