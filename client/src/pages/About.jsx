import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../img/AboutPage.jpg";
import AboutImage from "../img/AboutPage2.jpg";

const About = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <center>
            <h1 className="primary"> About QA Cinema </h1>
            <p className="primary">
              QA cinema was founded by it's five amazing founders Tom Ayling,
              Jasmin Willis, Guv Mehat, Rayyana Suleiman and Fowsia Bilkeer.
              Over the last few years it has become one of the leading cinema
              groups in the United Kingdom as it continues to provide a cinema
              experience like never before.
            </p>

            <div className="column">
              <img src={AboutImg} alt="Cinema-Picture" height="300" />
              <img src={AboutImage} alt="Seating-Picture" height="300" />
            </div>
            <p className="primary">
              The team at QA Cinemas prides itself with continuing to show the
              re-releases of cult classic films such as Goodfellas, Matilda, Top
              Gun and Pulp Fiction. Whilst also providing great cinema
              experience, out staff provide a premimum viewing experience. .{" "}
              <br />
            </p>

            <p className="primary">
              We are interested in your feedback as we are constantly trying to
              improve our customer experience, so if you have any suggestions or
              would like to let know us know how you feel. Please do not
              hesistate to <Link to="/contact">contact us</Link> or&nbsp;
              <Link to="/discussion">leave a review</Link>.
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default About;
