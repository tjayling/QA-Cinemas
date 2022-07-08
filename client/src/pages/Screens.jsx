import React from "react";
import ScreenImg1 from "../img/Screen-1.png";
import ScreenImg from "../img/Screen-2.png";
import ScreenImg4 from "../img/Screen-4.png";
import ScreenImg5 from "../img/Screen-5.png";
import ScreenImg6 from "../img/Screen-6.png";

const Screens = () => {
  return (
    <div>
      <h3> Screen 1 - IMAX </h3>
      <img src={ScreenImg1} alt="Screen-1" width="638" height="345" />
      <br />
      <h3 className="primary"> Screen 1 - IMAX </h3>
      <img
        src={ScreenImg1}
        alt="Screen-1"
        class="center"
        width="638"
        height="345"
      />
      <br />
      <h3> Screen 2 - IMAX </h3>
      <h3 className="primary"> Screen 2 - IMAX </h3>
      <img src={ScreenImg} alt="Screen-2" width="638" height="345" />
      <br />
      <h3> Screen 4 - Standard </h3>
      <h3 className="primary"> Screen 4 - Standard </h3>
      <img src={ScreenImg4} alt="Screen-4" width="638" height="345" />
      <br />
      <h3> Screen 5 - Standard </h3>
      <h3 className="primary"> Screen 5 - Standard </h3>
      <img src={ScreenImg5} alt="Screen-5" width="638" height="345" />
      <br />
      <h3> Screen 6 - Standard </h3>
      <img src={ScreenImg6} alt="Screen-6" width="638" height="345" />
      <br />
      <h3 className="primary"> Screen 6 - Standard </h3>
      <img src={ScreenImg6} alt="Screen-6" width="638" height="345" />
      <br />
    </div>
  );
};

export default Screens;
