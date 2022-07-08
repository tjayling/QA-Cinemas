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
      <form 
      className="discussion-form"
      style={{width:"50%" }}
        action="https://formsubmit.co/87393ec81fcbba0211622f33c93f1126"
        method="POST"
      >
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Your name.."
        ></input>

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        ></input>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Your email address..."
        ></input>

        <input
          type="hidden"
          className="form-control"
          name="_subject"
          value="New submission!"
        ></input>

        <label htmlFor="Content">Enter Content: </label>
        <input
          type="textarea"
          className="form-control"
          name="textValue"
          placeholder="Enter content here"
        ></input>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
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
