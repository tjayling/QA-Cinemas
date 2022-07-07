import React from "react";
import "../pages/Style/ResultStyle.css";

const Result = ({ movie }) => {
  return (
    <div className="result-container">
      <a
        className="result-link"
        href={
          "https://en.wikipedia.org/wiki/" + movie.title.replace(/\s+/g, "_")
        }
        target="_blank"
      >
        <p className="link-text">{movie.title}</p>
      </a>
    </div>
  );
};

export default Result;
