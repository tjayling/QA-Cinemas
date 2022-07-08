import React from "react";
import { useEffect, useState } from "react";
import Comment from "./Comment.jsx";
import "../pages/Style/Discussions.css";

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
      })
      .catch((error) => console.error(error));
    getData(false);
  }, [fetchData]);

  return movieData.map((movie) => {
    return (
      <div className="movie-container" key={movie._id}>
        <div className="movie-title">
          <h2>{movie.title}</h2>
          <img
            src={movie.img_link}
            alt={`${movie.title} cover`}
            width="150px"
          />
        </div>
        <div className="comments-container">
          {commentData.map((item) => {
            if (item.movie.$id == movie._id) {
              return (
                <div className="comment-container" key={item._id}>
                  <Comment comment={item} id={item._id} />
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
