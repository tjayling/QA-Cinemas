import React from "react";
import { useEffect, useState } from "react";
import Result from "./Result";
import "../pages/Style/SearchBar.css"
const axios = require("axios");

const SearchBar = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => setMovieData(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  function handleChange(event) {
    event.preventDefault();
    let movieElements = [];
    let showMovies = [];

    for (let movie of movieData) {
      if (
        (movie.title.toLowerCase().includes(event.target.value) ||
          movie.description.toLowerCase().includes(event.target.value) ||
          movie.actors.toLowerCase().includes(event.target.value)) &&
        !showMovies.includes(movie)
      )
        showMovies.push(movie);
    }

    for (let movie of showMovies) {
      movieElements.push(<Result movie={movie} key={movie._id} />);
    }

    setMovieResults(movieElements);
  }

  return (
    <div>
      <input type="search" placeholder="Search" onChange={handleChange} />
      <div
        style={{ position: "absolute", backgroundColor: "white", zIndex: "50" }}
      >
        {movieResults}
      </div>
    </div>
  );
};

export default SearchBar;
