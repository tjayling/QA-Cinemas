import React from "react";
import { useState } from "react";
import MovieDatalist from "../components/MovieDatalist.jsx";
import Error from "../components/Error.jsx";
import "../pages/Style/Discussions.css";
const axios = require("axios");
const Filter = require("bad-words");

const DiscussionsForm = ({ getData, fetchData }) => {
  const [usernameError, setUsernameError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [datalistError, setDatalistError] = useState(false);
  const [textareaError, setTextareaError] = useState(false);

  function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  function submitDiscussion(event) {
    event.preventDefault();
    const filter = new Filter();
    // ERROR HANDLING
    let username = event.target.username.value;
    let rating = event.target.rating.value;
    let comment = event.target.comment.value;
    let movie = event.target.movie.value;
    let allow = true;
    // IF USERNAME HAS AN INPUT
    if (username.length === 0) {
      setUsernameError(true);
      allow = false;
    }
    // IF THE RATING IS A VALID INTEGER BETWEEN 0 AND 10
    if (!isNumeric(rating) || parseInt(rating) < 0 || parseInt(rating) < 0) {
      setRatingError(true);
      allow = false;
    }
    // IF A VALID MOVIE HAS BEEN SELECTED
    if (!isNumeric(movie.split(".")[0])) {
      setDatalistError(true);
      allow = false;
    }
    // IF THE COMMENT HAS DATA
    if (comment.length === 0) {
      setTextareaError(true);
      allow = false;
    }
    // IF ALL OF THE ABOVE PASS, SEND A POST REQUEST TO THE DB
    if (allow) {
      axios
        .post("http://localhost:3000/discussion/post", {
          username: filter.clean(username),
          rating: rating,
          comment: filter.clean(comment),
          movie: { $ref: "movies", $id: movie.split(".")[0] },
        })
        .then()
        .catch((error) => console.error(error));
      getData(true);
    }
  }

  return (
    <form className="discussion-form" onSubmit={submitDiscussion}>
      <input
        className="discussion-input"
        name={"username"}
        type={"text"}
        placeholder={"Display name:  "}
      />
      <Error text="Please enter a value" display={usernameError} />
      <input
        className="discussion-input"
        name={"movie"}
        list={"movie-options"}
        placeholder={"Select a movie: "}
      />
      <MovieDatalist />
      <Error
        text="Please select a valid movie from the list"
        display={datalistError}
      />
      <input
        className="discussion-input"
        name={"rating"}
        type={"text"}
        placeholder={"Rating out of 10: "}
      />
      <Error text="Please enter a number" display={ratingError} />
      <textarea
        className="discussion-input"
        name={"comment"}
        placeholder={"Comment: "}
        rows={"4"}
        cols={"50"}
      />
      <Error text="Please enter a value" display={textareaError} />
      <input className="discussion-input" type="submit" />
    </form>
  );
};

export default DiscussionsForm;
