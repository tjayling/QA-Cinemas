import React from "react";
import { useParams } from "react-router-dom";
import MovieFormat from "../components/MovieFormat.jsx";

const Movie = () => {
  const { id } = useParams();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {MovieFormat(id)}
    </div>
  );
};

export default Movie;
