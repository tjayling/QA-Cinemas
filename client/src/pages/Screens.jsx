import React from 'react'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import ScreenStyle from './ScreenStyle'
import CinemaImg from "../img/Seating-Plan.png"
import ScreenImg from "../img/Screen-2.png"
import ScreenImg4 from "../img/Screen-4.png"
import ScreenImg5 from "../img/Screen-5.png"
import ScreenImg6 from "../img/Screen-6.png"


const Screens = () => {
  return (
    <div>
      
   <h3 className='primary'> Screen 1 - IMAX </h3>
   <img src={CinemaImg} alt='Seating-Plan' class='center' width="638" height="345" /><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

 
   <h3 className='primary'> Screen 2 - IMAX </h3>
   <img src={ScreenImg} alt='Screen-2' width="638" height="345" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>


   <h3 className='primary'> Screen 4 - Standard </h3>
   <img src={ScreenImg4} alt="Screen-4" width="638" height="345" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>


   <h3 className='primary'> Screen 5 - Standard </h3>
   <img src={ScreenImg5} alt="Screen-5" width="638" height="345" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>


   <h3 className='primary'> Screen 6 - Standard  </h3>
   <img src={ScreenImg6} alt="Screen-6" width="638" height="345" /><br/>
   <br/><br/>
   


<Footer/>

    </div>  
  )
}

export default Screens