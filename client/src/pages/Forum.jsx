import React from "react";
import { useState } from "react";
import Form from "../components/DiscussionsForm.jsx";
import createElements from "../components/Format.jsx";
const axios = require("axios");

const Forum = () => {
  const [movieElements, setMovieElements] = useState([]);

  axios
    .get("http://localhost:3000/discussion")
    .then((response) => setMovieElements(createElements((response.data), "comments")))
    .catch((error) => console.error(error));
    
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form />
      <div>{movieElements}</div>
    </div>
  );
};

export default Forum;