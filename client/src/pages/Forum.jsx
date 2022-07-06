import React from "react";
import Footer from "../components/Footer"

import MovieDatalist from "../components/MovieDatalist.jsx";

const Forum = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", position: "-webkit-sticky", left: 0, bottom: 0, right: 0  }}>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input type={"text"} placeholder={"Display name:"} />
        <input list={"movie-options"} placeholder={"Select a movie: "} />
        <MovieDatalist />
        <textarea placeholder={"Comment:"} rows={"4"} cols={"50"} />
        <input type={"submit"} value={"Submit"} />
        <Footer/>
      </form>

     
   
    </div>
  );
};

export default Forum;