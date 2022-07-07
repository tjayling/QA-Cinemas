import React from 'react'
import { Link } from "react-router-dom"
import CinemaImg from "../img/Seating-Plan.png"
import ScreenImg from "../img/Screen-2.png"
import ScreenImg4 from "../img/Screen-4.png"
import ScreenImg5 from "../img/Screen-5.png"
import ScreenImg6 from "../img/Screen-6.png"

const Screens = () => {
  return (
    <div>
      <h1>Screens Page</h1>
      <p> Welcome to our Screen page, here you can see the layout of each screen. We have a great selection of screens from IMAX to Standard. The blue seats have the optimum seating postion for you to enjoy the movie. </p>

      <div class="row justify-content-center">
        <h2>IMAX</h2>
        <p>Here at QA cinema we have 2 IMAX screens. IMAX has the tallest aspect ratio, 1.9:1, creating a emersive atomshphere capturing all the action on the screen. </p>
      <div class="col-6">
   <h3>Screen 1</h3>
   <img src={CinemaImg} alt='Seating-Plan' width="638" height="345" /><br/>
   </div>

   
   <div class="col-6">
   <h3>Screen 2</h3>
   <img src={ScreenImg} alt='Screen-2' width="638" height="345" /><br/>
   <br/><br/>
   </div>

   <div class="col-6">
   <h3> Screen 4 - Standard </h3>
   <img src={ScreenImg4} alt="Screen-4" width="638" height="345" /><br/>
   <br/><br/>

   </div>

   <div class="col-6">
   <h3> Screen 5 - Standard </h3>
   <img src={ScreenImg5} alt="Screen-5" width="638" height="345" /><br/>
   <br/><br/>
   </div>

   <div class="col-6">
   <h3> Screen 6 - Standard  </h3>
   <img src={ScreenImg6} alt="Screen-6" width="638" height="345" /><br/>
   <br/><br/>
   </div>
   </div>


    </div>  
  )
}

export default Screens
