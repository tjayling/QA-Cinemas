import React from "react";
import createElements from "../components/Format";

const movies = () => {
  let moviePosters = createElements({success:true, data: []}, "movies");
  return <div>{moviePosters}</div>;
};

export default movies;
