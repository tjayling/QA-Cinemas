import React, { Component } from "react";
import MovieDatalist from "../components/MovieDatalist.jsx";
const axios = require("axios");
const Filter = require("bad-words");

class DiscussionsForm extends Component {
  submitDiscussion(event) {
    const filter = new Filter();
    event.preventDefault();
    // console.log(filter.clean(event.target.username.value));
    // console.log(event.target.movie.value);
    // console.log(event.target.movie.value.split(".")[0]);
    axios
      .post("http://localhost:3000/discussion/post", {
        username: filter.clean(event.target.username.value),
        rating: event.target.rating.value,
        comment: filter.clean(event.target.comment.value),
        movie: event.target.movie.value.split(".")[0],
      })
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={this.submitDiscussion}
      >
        <input
          name={"username"}
          type={"text"}
          placeholder={"Display name:  "}
        />
        <input
          name={"movie"}
          list={"movie-options"}
          placeholder={"Select a movie: "}
        />
        <MovieDatalist />
        <input
          name={"rating"}
          type={"text"}
          placeholder={"Rating out of 10: "}
        />
        <textarea
          name={"comment"}
          placeholder={"Comment: "}
          rows={"4"}
          cols={"50"}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default DiscussionsForm;
