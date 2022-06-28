import React from "react";
import {useState} from 'react';




const Contact = () => {
  return <div>
    <h1> Contact us</h1>
    <p>Welcome to our contact page, here you can contact us for any inquires</p>

    <h2>Contact us via email</h2>
    <form id ="Cameraform">
    <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
  
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

      <label for="email">Email</label>
      <input type="text" id="email" name="emailadd" placeholder="Your email address..."></input>

      <label for="subject">Subject</label>
      <select id="subject" name="subject">
        <option value="movie">Movie</option>
        <option value="bookings">Bookings</option>
        <option value="complaint">Complaint</option>
        <option value="other">Other</option>
      </select>

      <label for="Content">Enter Content: </label>
      <input type="textarea" name="textValue" placeholder="Enter content here"></input>
  
  
      <input type="submit" value="Submit"></input>


     </form>           
    <h2>Contact via mail</h2>
    <p>123 oneroad</p>
    <p>twocity</p>
    <p>ab1234cd</p>

    <h2>Contact via phone</h2>
    <p>+44 123 456 789</p>


  </div>
};

export default Contact;
