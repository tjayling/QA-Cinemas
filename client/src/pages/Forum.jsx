import React from "react";
import MovieDatalist from "../components/MovieDatalist.jsx";

const Forum = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input type={"text"} placeholder={"Display name:"} />
        <input list={"movie-options"} placeholder={"Select a movie: "} />
        <MovieDatalist />
        <textarea placeholder={"Comment:"} rows={"4"} cols={"50"} />
        <input type={"submit"} value={"Submit"} />
      </form>
    </div>
  );
};

export default Forum;