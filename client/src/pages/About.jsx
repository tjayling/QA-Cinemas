import React from "react";
import { Link } from "react-router-dom"
import AboutImg from "../img/AboutPage.jpg"
import AboutImage from "../img/AboutPage2.jpg"


const About = () => {
  return (
    <div>
       
        <div className="row">
            <div className="col">
                <center>
                    <h2> About  QA Cinema </h2>

                    QA cinema was founded by it's five amazing founders Tom Ayling, Jasmin Willis, Guv Mehat, Rayyana Suleiman and Fowsia Bilkeer. 
                    Over the last few years it has become one of the leading cinema groups in the United Kingdom as it continues to provide a cinema experience like never before. <br/>
                    <br/>
                    
   

                    <div className="column" >
                    <img src={AboutImg} alt="Cinema-Picture" width='555' />   <img src={AboutImage} alt="Seating-Picture" width='600'  /><br/>
                    </div>
                    <br/>
                    
                    The team at QA Cinemas prides itself with continuing to show the re-releases of cult classic films such as Goodfellas, Matilda, Top Gun and Pulp Fiction. 
                    Whilst also providing great cinema experience, we also provide the best care for our customers.
                    <Link to="/contact"><u>here</u></Link>. <br/>

                    We are interested in your feedback as we are constantly trying to improve our customer experience, so if you have any suggestions or would like to let know us know how you feel.
                    Please do not hesistate to contact us or drop a message in the discussion forum <Link to="/discussion"><u>here</u></Link>.
                </center><br/><br/>
            </div>
        </div>
        
        </div>
  );
  
  };
 

export default About
