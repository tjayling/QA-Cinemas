import "./Style/Global.css";
import { Link } from "react-router-dom";

const Places = () => {
  return (
    <div>
      <h1>Places Near by</h1>
      <p>
        Plan your amazing day out with these fanastic resurants and activities
        near by.{" "}
      </p>
      <h1>Where are we?</h1>
      <p>
        Find us on the map below{" "}
        <Link to="/way">Click here for directions</Link>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
        width="300"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="center"
      ></iframe>
      <h1>Restaurants</h1>
      <p>
        Wide selction of restaurants for you to vist during your visit. Use your
        cinema ticket to get a discount.
      </p>

      <div className="row justify-content-center">
        <div className="col-4">
          <h2>Mcdonald's </h2>
          <p>
            Our mission is to make delicious feel-good moments easy for
            everyone.
          </p>
          <img
            src="Mcdonalds.png"
            alt="Macdonalds near me"
            witdh="200"
            height="300"
            className="center"
          ></img>
          <h3>Discount</h3>
          <p>
            Buy an adult meal get a free kids meal, with vailid family ticket
          </p>
        </div>

        <div className="col-4">
          <h2>KFC</h2>
          <p>Finger Lickin' Good</p>
          <img
            src="KFC.png"
            alt="Fast Food near me"
            witdh="200"
            height="300"
            className="center"
          ></img>
          <h3>Discount</h3>
          <p>Family bucket for £7.99 with vaiid ticket</p>
          <p>Students free addon if you spend over £3</p>
        </div>

        <div className="col-4">
          <h2>Burger king</h2>
          <p>If you ask us, it just tastes better</p>
          <img
            src="BK.png"
            alt="Burgers"
            witdh="200"
            height="300"
            className="center"
          ></img>
          <h3>Discount</h3>
          <p>Two for Tuesdays</p>
        </div>
      </div>

      <br></br>
      <h1> Things to do</h1>
      <p>Enjoy these activities </p>

      <div className="row justify-content-center">
        <div className="col-4">
          <h2>Art Gallery </h2>
          <p>Fantasic collection of cotempry art, pop and movie memorabilia </p>
          <img
            src="AG.png"
            alt="Macdonalds near me"
            witdh="200"
            height="300"
            className="center"
          ></img>
        </div>

        <div className="col-4">
          <h2>Hollywood Bowling</h2>
          <p>Play a quick game of 10 pin or have fun in the arcade</p>
          <img
            src="bowl.png"
            alt="Macdonalds near me"
            witdh="200"
            height="300"
            className="center"
          ></img>
        </div>

        <div className="col-4">
          <h2>Crazy Golf</h2>
          <p>Fancy a game of golf?</p>
          <img
            src="CG.png"
            alt="Macdonalds near me"
            witdh="300"
            height="300"
            className="center"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Places;
