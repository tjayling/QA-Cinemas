import React from "react";
import { useLocation } from "react-router-dom";

const Viewing = () => {
  let viewing = JSON.parse(useLocation().state.viewing);
  let movie = JSON.parse(useLocation().state.movie);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{movie.title}</h1>
      <img
        src={movie.img_link}
        alt={`${movie.title} cover`}
        width="200px"
      />
      <p>
        Screen {viewing.screen.$id}
        <br />
        £insert cost here
      </p>
      <button>Book now</button>
    </div>
  );
};

export default Viewing;
