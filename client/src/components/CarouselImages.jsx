import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const axios = require("axios");

const CarouselImages = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovieData(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  let imageElements = [];

  for (let i = 0; i < movieData.length; i++) {
    imageElements.push(
      <Carousel.Item interval={2000} key={i}>
        <Link to={`/movie/${movieData[i]._id}`}>
          <img
            className="d-block"
            src={movieData[i].img_link}
            alt={`Slide ${i}`}
            width="300px"
          />
        </Link>
      </Carousel.Item>
    );
  }
  return imageElements;
};

export default CarouselImages;
