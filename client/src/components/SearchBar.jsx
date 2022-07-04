import React, { Component } from "react";
import { useState } from "react";

class SearchBar extends Component {
  searchInput;
  movies;
  constructor() {
    super()
    this.movies = [
      { name: "Matilda", genre: "Children's film" },
      { name: "Pulp Fiction", genre: "Crime" },
      { name: "The Room", genre: "Drama" },
      { name: "Top Gun", genre: "Action" },
      { name: "Goodfellas", genre: "Mafia" },
    ];
  }
  handleChange(e) {
    e.preventDefault();
    this.searchInput = e.target.value;
    if (this.searchInput.length > 0) {
      this.movies.filter((movie) => {
        return movie.name.match(this.searchInput);
      });
    }
  }
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search"
          onSubmit={this.handleChange}
        />
        <p> {this.searchInput}</p>
      </div>
    );
  }
}
export default SearchBar;
