import React from "react";
import { useEffect, useState } from "react";
import Comment from "./Comment.jsx";

const axios = require("axios");

const CommentsFormat = (getData, fetchData) => {
  const [movieData, setMovieData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => setMovieData(response.data.data))
      .catch((error) => console.error(error));
    axios
      .get("http://localhost:3000/discussion")
      .then((response) => {
        setCommentData(response.data.data);
        console.log(commentData);
      })
      .catch((error) => console.error(error));
    console.error("USing effect");
    console.log(commentData);
    getData(false);
  }, [fetchData]);

  return movieData.map((movie) => {
    return (
      <div style={{ margin: "25px" }} key={movie._id}>
        <h2>{movie.title}</h2>
        <div style={{ display: "flex" }}>
          <img
            src={movie.img_link}
            alt={`${movie.title} cover`}
            width="150px"
          />
          {commentData.map((item) => {
            if (item.movie.$id === movie._id) {
              return (
                <div key={item._id}>
                  <div style={{ border: "2px solid black" }}>
                    <Comment comment={item} id={item._id} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  });
};

export default CommentsFormat;