import React from "react";
import "./Style/Global.css";

const Contact = () => {
  return (
    <div>
      <h1 className="page-title"> Contact us</h1>
      <p>
        Welcome to our contact page, here you can contact us for any inquires
      </p>

      <h2>Contact us via email</h2>
      <div className="center">

        <form
        className="form-container main-containers"
          action="https://formsubmit.co/87393ec81fcbba0211622f33c93f1126"
          method="POST"
        >

          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Your name.."
          />



          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your email address..."
          />


          <input
            type="hidden"
            className="form-control"
            name="_subject"
            value="New submission!"
          />


          <label htmlFor="Content">Enter Content: </label>
          <input
            className="form-control"
            type="textarea"
            name="textValue"
            placeholder="Enter content here"
          />

          <div className="center">
            <button type="submit" className="discussion-input">
              Send
            </button>
          </div>

        </form>
      </div>

      <h2>Contact via mail</h2>
      <p>123 oneroad</p>
      <p>twocity</p>
      <p>ab1234cd</p>

      <h2>Contact via phone</h2>
      <p>+44 123 456 789</p>
    </div>
  );
};

export default Contact;
