import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

const ListingsFormat = () => {
  const [movieData, setMovieData] = useState([]);
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => setMovieData(response.data.data))
      .catch((error) => console.error(error));
    axios
      .get("http://localhost:3000/viewings")
      .then((response) => setListingData(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return movieData.map((movie) => {
    return (
      <div style={{ margin: "25px" }} key={movie._id}>
                  <div className="reviews-container main-containers"> 
        <h2>{movie.title}</h2>
        </div>
        <img src={movie.img_link} alt={`${movie.title} cover`} width="200px" />
        {listingData.map((item) => {
          if (item.movie.$id === movie._id) {
            return (
              <div key={item._id}>
                <div style={{ border: "2px solid black",marginTop: "10px",   marginBottom: "10px" }}>
                  <Link
                    to={`/viewing`}
                    state={{
                      viewing: JSON.stringify(item),
                      movie: JSON.stringify(movie),
                    }}
                  >
                    <p>
                      {`Time: ${item.time}`}
                      <br />
                      {`Screen: ${item.screen.$id}`}
                    </p>
                  </Link>
                </div>
              </div>
              
            );
          }
        })}
      </div>

    );
  });
};

export default ListingsFormat;
