import React from "react";
 import { useLocation, Link } from "react-router-dom";
 import Footer from "../components/Footer"




const Viewing = () => {
  let viewing = JSON.parse(useLocation().state.viewing);
  let movie = JSON.parse(useLocation().state.movie);
  console.table(viewing);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{movie.title}</h1>
      <img
        src={movie.img_link}
        alt={`${movie.title} cover image`}
        width="200px"
      />
      <p>
        Screen {viewing.screen.$id}
        <br />
      
      </p>
      <br/>
      <br/>
      <div> 
      <div class="btn-group">
    <button type="button" class="btn btn-black dropdown-toggle" data-bs-toggle="dropdown">Tickets</button>
    <div class="dropdown-menu">
        <div class="dropdown-header">Cinema Tickets</div>
        <a href="#" class="dropdown-item">Adult</a>
        <a href="#" class="dropdown-item">Children</a>
        <a href="#" class="dropdown-item">Student</a>
        <a href="#" class="dropdown-item">Senior</a> 
        </div>
        <div>
       <select id="tickets"> <option value="Select">  </option> <option value="Adult"> Adult </option> <option value="Children"> Children</option> <option value="Student"> Student</option> <option value="Senior"> Senior</option></select>
       <select id="quantity"> <option value="0"> 0 </option> <option value="1"> 1 </option> <option value="2"> 2</option> <option value="3"> 3</option> <option value="4"> 4</option> <option value="5"> 5 </option></select>
       <select id="pricing"> <option value="0"> 0 </option> <option value="1"> 1-£1 </option> <option value="2"> 2-£2</option> <option value="3"> 3-£3 </option> <option value="4"> 4-£4 </option> <option value="5"> 5-£5 </option></select>
 
    </div>
  </div>
<Footer/>
      </div>
      
    </div>
    
  );
};

export default Viewing;

// booking branch
