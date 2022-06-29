import React from "react";
const axios = require("axios");

axios
  .get("http://localhost:3000/viewings")
  .then((response) => useData(response.data))
  .catch((error) => console.error(error));

axios.get("http://localhost:3000/movies");

let movieElements = [];

function useData(data) {
  if (data.success) {
    let movieIds = [];
    for (let viewing of data.data) {
      if (!movieIds.includes(viewing.movie.$id)) {
        movieIds.push(viewing.movie.$id);
      }
    }
    let movieViewings = [];
    for (let i = 0; i < movieIds.length; i++) {
      movieViewings[i] = [];
      for (let viewing of data.data) {
        if (viewing.movie.$id === movieIds[i]) {
          movieViewings[i].push(viewing);
        }
      }
    }

    axios
      .get("http://localhost:3000/movies")
      .then((response) => createMovieElements(response.data))
      .catch((error) => console.error(error));

    function createMovieElements(movieData) {
      for (let movie of movieData.data) {
        if (movieIds.includes(movie._id)) {
          movieElements.push(
            <div style={{margin: "25px"}}>
              <h2>{movie.title}</h2>
              <img
                src={movie.img_link}
                alt={`${movie.title} cover image`}
                width="200px"
              />
              {data.data.map((viewing) => {
                if (viewing.movie.$id === movie._id) {
                  return (
                    <a href="/">
                      <div style={{ border: "2px solid black" }}>
                        <p>{`Time: ${viewing.time}`}</p>
                        <p>{`Screen: ${viewing.screen.$id}`}</p>
                      </div>
                    </a>
                  );
                }
              })}
            </div>
          );
        }
      }
    }
  }
}

const listings = () => {
  return <div style={{ display: "flex" }}>{movieElements}</div>;
};

export default listings;
