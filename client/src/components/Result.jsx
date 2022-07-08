import React from "react";
import "../pages/Style/ResultStyle.css";

const Result = ({ movie }) => {
  return (
    <div className="result-container">
      <a
        className="result-link"
        href={
          `http://localhost:3001/movie/${movie._id}`
        }
        target="_blank"
      >
        <p className="link-text">{movie.title}</p>
      </a>
    </div>
  );
};

export default Result;
