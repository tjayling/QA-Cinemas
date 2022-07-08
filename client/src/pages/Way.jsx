import "./Style/WayStyle.css";
import React from "react";

const Way = () => {
  return (
    <div>
      <h1 className="page-title">How to Get here</h1>
      <p>Whether your means of traving lis, we accommodate all types of trasnport.  </p>
      <div className="row justify-content-center">
        <div classname="col-4">
          <h1> Car</h1>
          <br></br>
          <p>We have fanstaci parking infront of our cinema. Able to hold upto 420 cars, with 40 easy access parking and an addtional 50 quick charge spots. Parking is free. </p>
          <br></br>
        </div>
        <div className="col-4">
          <h1> Bus</h1>
          <br></br>
          <p>The 51 connects the city centre to the cinema. Operating 24hours allowing you to watch your favorite movie at midnight luanches</p>
          <br></br>
        </div>
        <div className="col-4">
          <h1> Cycle</h1>
          <br></br>
          <p>The A1 has a dual cycle path keeping you safe and off the road, or travel the scince route on the canel, 16b north Indoor bike storage which is looked after by employees to keep your bike safe.</p>
          <br></br>
        </div>
        <div className="col-4">
          <h1> Walking</h1>
          <br></br>
          <p> Situated 20 minuites from the city centre, 25 minuites from south city center </p>
          <br></br>
        </div>
      </div>
      <h1>Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
        width="300"
        height="450"
        allowfullscreen=""
        loading="lazy"
        class="center"
      ></iframe>
    </div>
  );
};

export default Way;
