import React from "react";
import Logo from "../components/Logo";
import bg from "../img/bg.png";
import CarouselImages from "../components/CarouselImages";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <img
        src={bg}
        width="100%"
        style={{ position: "absolute" }}
        alt="background"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo height={150} style={{ marginTop: "75px" }} />
        <hr />
          <Carousel>{CarouselImages()}</Carousel>
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Home;
