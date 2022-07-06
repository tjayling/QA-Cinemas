import React from 'react';
import './Style/Global.css';



const Class = () => {
    return (
        <body>
        <div >
            <div a>
                <h1>Classification</h1>
                <p>The purpose of the British Board of Film Classification, besides vetting films to make sure that they don't contain material deemed unsuitable, is to classify films into various categories to provide an advance warning of what the audience might expect in terms of suitability for particular age groups.

                    Classifications currently in use are Uc, U, PG, 12, 12A, 15 and 18 but quite a few more have been featured on film posters throughout the last century. In chronological order, this is a complete list of official BBFC classifications:</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-3">
                    <h2>Uc</h2>
                    <p>A sub classification of U and particularly suitable for pre-school children.</p>
                    <img src="Uc.png" alt="Kids movies" witdh='200' height='300' class="center"></img>
                </div>

                <div class="col-3">
                    <h2>U</h2>
                    <p>Stands for "Universal" and denotes that is is suitable for everyone.</p>
                    <img src="U.png" alt="Kids movies" witdh='200' height='300' class="center"/>
                </div>

                <div class="col-3">
                    <h2>PG</h2>
                    <p>Stands for "Parental Guidance" and denotes that the movie contains material which might not be suitable for children.</p>
                    <img src="PG.png" alt="Kids movies" witdh='200' height='300' class="center"></img>
                </div>
                
                <div class="col-3">
                    <h2>12</h2>
                    <p>Contains material which is unstuable for children but appropriate for 12 year-olds upwards</p>
                    <img src="12.png" alt="Kids movies" witdh='200' height='300' class="center"></img>
                </div>



                <div class="col-3">
                    <h2>12A</h2>
                    <p>Chicldren under 12 can watch with accompanied by an adult</p>
                    <img src="12a.png" alt="Kids movies" witdh='200' height='300' class="center"></img>
                </div>

                <div class="col-3">
                    <h2>15</h2>
                    <p>Stuiable for young adults</p>
                    <img src="15.png" alt="Kids movies" witdh='200' height='300' class="center"></img>
                </div>

                <div class="col-3">
                    <h2>18</h2>
                    <p>Suitable for anyone over the age of 18.</p>
                    <img src="18.png" alt="Kids movies" witdh='200' height='300' class="center"></img>
                </div>
            </div>
        </div >
        </body>
    )
}

export default Class