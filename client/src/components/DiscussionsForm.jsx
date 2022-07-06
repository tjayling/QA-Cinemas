import React from "react";
import { useState } from "react";
import MovieDatalist from "../components/MovieDatalist.jsx";
import Error from "../components/Error.jsx";
const axios = require("axios");
const Filter = require("bad-words");

const DiscussionsForm = ({getData, fetchData}) => {
  const [usernameError, setUsernameError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [datalistError, setDatalistError] = useState(false);
  const [textareaError, setTextareaError] = useState(false);

  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  function submitDiscussion(event) {
    event.preventDefault();
    const filter = new Filter();
    let username = event.target.username.value;
    let rating = event.target.rating.value;
    let comment = event.target.comment.value;
    let movie = event.target.movie.value;
    let allow = true;
    if (username.length === 0) {
      setUsernameError(true);
      allow = false;
    }
    if (
      !isNumeric(rating) ||
      parseInt(rating) < 0 ||
      parseInt(rating) < 0
    ) {
      setRatingError(true);
      allow = false;
    }
    if (!isNumeric(movie.split(".")[0])) {
      setDatalistError(true);
      allow = false;
    }
    if (comment.length === 0) {
      setTextareaError(true);
      allow = false;
    }
    if (allow) {
      axios
        .post("http://localhost:3000/discussion/post", {
          username: filter.clean(username),
          rating: rating,
          comment: filter.clean(comment),
          movie: movie.split(".")[0],
        })
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
        getData(true);
    } else {
      console.error("ELSE");
    }
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={submitDiscussion}
    >
      <input name={"username"} type={"text"} placeholder={"Display name:  "} />
      <Error text="Please enter a value" display={usernameError} />
      <input
        name={"movie"}
        list={"movie-options"}
        placeholder={"Select a movie: "}
      />
      <MovieDatalist />
      <Error
        text="Please select a valid movie from the list"
        display={datalistError}
      />
      <input name={"rating"} type={"text"} placeholder={"Rating out of 10: "} />
      <Error text="Please enter a number" display={ratingError} />
      <textarea
        name={"comment"}
        placeholder={"Comment: "}
        rows={"4"}
        cols={"50"}
      />
      <Error text="Please enter a value" display={textareaError} />
      <input type="submit" />
    </form>
  );
};

export default DiscussionsForm;
