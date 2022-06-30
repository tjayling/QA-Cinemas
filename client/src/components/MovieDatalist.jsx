import React from "react";
const axios = require("axios");

axios
  .get("http://localhost:3000/movies")
  .then((response) => createDatalist(response.data))
  .catch((error) => console.error(error));

let options;
function createDatalist({ data }) {
  options = data.map((movie) => (<option value={movie.title} key={movie._id} />));
  console.log(options)
}

const MovieDatalist = () => {
  return <datalist id="movie-options">{options}</datalist>;
};

export default MovieDatalist;