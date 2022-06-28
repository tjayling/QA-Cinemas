import React from "react";
import Logo from "../components/Logo";
import bg from "../img/bg.png";

const Home = () => {
  return (
    <div>
      <img src={bg} width="100%" style={{ position: "absolute" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Logo
          height={150}
          style={{marginTop: "75px" }}
        />
      </div>
    </div>
  );
};

export default Home;
