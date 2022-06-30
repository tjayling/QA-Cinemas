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
      
   <h3> Screen 1 - IMAX </h3>
   <img src={CinemaImg} alt='Seating-Plan' width="638" height="345" /><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

 
   <h3> Screen 2 - IMAX </h3>
   <img src={ScreenImg} alt='Screen-2' width="638" height="345" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>


   <h3> Screen 4 - Standard </h3>
   <img src={ScreenImg4} alt="Screen-4" width="638" height="345" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>


   <h3> Screen 5 - Standard </h3>
   <img src={ScreenImg5} alt="Screen-5" width="638" height="345" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>


   <h3> Screen 6 - Standard  </h3>
   <img src={ScreenImg6} alt="Screen-6" width="638" height="345" /><br/>
   <br/><br/>




    </div>  
  )
}

export default Screens