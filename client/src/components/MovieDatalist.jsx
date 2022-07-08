import React from "react";
import { useEffect, useState } from "react";

const axios = require("axios");

const MovieDatalist = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => setMovieData(response.data.data))
      .catch((error) => console.error(error));
  });

  let options = movieData.map((movie) => (
    <option value={`${movie._id}. ${movie.title}`} key={movie._id} />
  ));

  return <datalist id="movie-options">{options}</datalist>;
};

export default MovieDatalist;
