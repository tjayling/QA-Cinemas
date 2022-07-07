import React from "react";
import './Style/Global.css';


const Contact = () => {
  return (
    <body>
      <div>
        <h1> Contact us</h1>
        <p>Welcome to our contact page, here you can contact us for any inquires</p>

        <h2>Contact us via email</h2>
        <form action="https://formsubmit.co/87393ec81fcbba0211622f33c93f1126" method="POST">


          <label for="fname">First Name</label>
          <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Your name.." ></input>

          <label for="lname">Last Name</label>
          <input type="text" class="form-control" id="lname" name="lastname" placeholder="Your last name.."></input>

          <label for="email">Email</label>
          <input type="email" class="form-control" name="email" placeholder="Your email address..." ></input>

          <input type="hidden" class="form-control" name="_subject" value="New submission!"></input>


          <label for="Content">Enter Content: </label>
          <input type="textarea" class="form-control" name="textValue" placeholder="Enter content here"></input>


          <button type="submit" class="btn btn-primary">Send</button>
        </form>
        <h2>Contact via mail</h2>
        <p>123 oneroad</p>
        <p>twocity</p>
        <p>ab1234cd</p>

        <h2>Contact via phone</h2>
        <p>+44 123 456 789</p>


      </div>
      </body>
  )
};

export default Contact;

