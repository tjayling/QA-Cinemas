import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import "./Style/Viewing.css"

=======
>>>>>>> 90cf280159433b09b1d73f2581c1bc8e0a239d5b

const Viewing = () => {
  let viewing = JSON.parse(useLocation().state.viewing);
  let movie = JSON.parse(useLocation().state.movie);

  console.table(viewing);

<<<<<<< HEAD
  const [totalPrice, setTotalPrice] = useState(1);
=======

  const [totalPrice, setTotalPrice] =useState(1);
>>>>>>> 90cf280159433b09b1d73f2581c1bc8e0a239d5b
  const [emails, setEmails] = useState("")


  const [product] = useState({
    title: movie.title,
    price: `£${totalPrice}.00`,
    amount: `${totalPrice}`,
    description: "Cinema tickets",
  });

  async function handleToken(token, addresses) {
<<<<<<< HEAD
    const response = await axios.post(
      "http://localhost:3000/checkout",
      { token, product }
    );

    console.log(response.status)
=======
    const response = await axios.post("http://localhost:3000/checkout", {
      token,
      product,
    });

    console.log(response.status);
>>>>>>> 90cf280159433b09b1d73f2581c1bc8e0a239d5b

    if (response.status === 200) {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  function price(e) {
    e.preventDefault();
    setTotalPrice(e.target.value);
  }

  function bookingEmail(e) {
    e.preventDefault();
    setEmails(e.target.value);
  }

  let bookingId = 2;
  let viewingId = viewing.id;

  function submitBooking(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Bookings/create", {
        id: `${bookingId}`,
        email: `${emails}`,
        viewing: {
          $ref: "viewings",
          $id: `${viewingId}`
        }
      })
      .then((res) => {
        console.log(res)
        if (res.status === 201) {
          window.location.replace("http://localhost:3001/payment");
          bookingId++
        }
      })
<<<<<<< HEAD
      .catch((error) => console.error(error));


=======
      .catch((error) => console.error(error));   
>>>>>>> 90cf280159433b09b1d73f2581c1bc8e0a239d5b
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <link rel="stylesheet" href="./Style/Viewing.css"></link>
      <h1>{movie.title}</h1>
<<<<<<< HEAD
      <div id= "movie">
      <img id="movie-pic" class= "center"
        src={movie.img_link}
        alt={`${movie.title} cover image`}
        width="100px"
      />
      </div>
=======
      <img src={movie.img_link} alt={`${movie.title} cover`} width="200px" />
>>>>>>> 90cf280159433b09b1d73f2581c1bc8e0a239d5b
      <p>
        Screen {viewing.screen.$id}
        <br />
        Time {viewing.time}
      </p>
      <br />
      <br />
      <div>
        <div class="flex-container" id="payment">
          {/* <button type="button" class="btn btn-black dropdown-toggle" data-bs-toggle="dropdown">Ticket quantity:</button> */}
<<<<<<< HEAD
          <div>
            <form class="form-group container" id="tickets">
              <label for="quantity">Ticket Quantity: </label>
              {/* <select id="tickets"> <option value="Select">  </option> <option value="Adult"> Adult </option> <option value="Children"> Children</option> <option value="Student"> Student</option> <option value="Senior"> Senior</option></select> */}
              <select id="quantity" class="form-select" onChange={(e) => price(e)}>
                <option defaultValue="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
              </select>
              <br />

              <p id="viewing-price">Total Price: £{totalPrice}.00</p>
              <label for="booking-email" class='form-label'>Please enter the email you wish to book with:</label>
              <br />
              <input type='email' id='booking-email' class="form-control" name={"email"} placeholder="Enter email..." onChange={(e) => bookingEmail(e)} />
              <br />
              {/* <select id="pricing"> <option value="0"> 0 </option> <option value="1"> 1-£1 </option> <option value="2"> 2-£2</option> <option value="3"> 3-£3 </option> <option value="4"> 4-£4 </option> <option value="5"> 5-£5 </option></select> */}
              <div className="form-group container"></div>
              <br/>
              <StripeCheckout
                className="center"
                stripeKey="pk_test_51LIDEHJ6kGqR3mxRNS6Z6YjnbMJdWo9Kru6Tdd6ldtAWHXO59NarxNzz3eHtSV2CgEX5i68MDOg3AlwNqadCHse300RXF74Vpc"
                token={handleToken}
                amount={product.price * 100}
                name="QA Cinemas"
                billingAddress
                shippingAddress
              />
              <br />
              <br/>
              <button type="button" id="confirm-butt" onClick={(e) => submitBooking(e)}>Confirm Ticket Booking</button>
            </form>
            <div />
=======
          <div class="dropdown-menu">
            <div class="dropdown-header">Cinema Tickets</div>
            <a href="#" class="dropdown-item">
              Adult
            </a>
            <a href="#" class="dropdown-item">
              Children
            </a>
            <a href="#" class="dropdown-item">
              Student
            </a>
            <a href="#" class="dropdown-item">
              Senior
            </a>
          </div>
          <div>
            <label for="quantity">Ticket Quantity: </label>
            {/* <select id="tickets"> <option value="Select">  </option> <option value="Adult"> Adult </option> <option value="Children"> Children</option> <option value="Student"> Student</option> <option value="Senior"> Senior</option></select> */}

            <select
              id="quantity"
              class="form-select"
              onChange={(e) => price(e)}
            >
              <option defaultvalue="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>

              <option value="5"> 5 </option>
            </select>
            <br />
            <p id="viewing-price">Total Price: £{totalPrice}.00</p>
            <label for="booking-email" class='form-label'>Please enter the email you wish to book with:</label>
            <br/>
            <input type='email' id= 'booking-email' name={"email"} placeholder="Enter email..." onChange={(e)=>bookingEmail(e)}/>
            <br/>
            {/* <select id="pricing"> <option value="0"> 0 </option> <option value="1"> 1-£1 </option> <option value="2"> 2-£2</option> <option value="3"> 3-£3 </option> <option value="4"> 4-£4 </option> <option value="5"> 5-£5 </option></select> */}
            <div className="form-group container"></div>
            <StripeCheckout
              className="center"
              stripeKey="pk_test_51LIDEHJ6kGqR3mxRNS6Z6YjnbMJdWo9Kru6Tdd6ldtAWHXO59NarxNzz3eHtSV2CgEX5i68MDOg3AlwNqadCHse300RXF74Vpc"
              token={handleToken}
              amount={product.price * 100}
              name="QA Cinemas"
              billingAddress
              shippingAddress
            />

            <br/>
            <button type="button" id="confirm-butt" onClick={(e)=>submitBooking(e)}>Confirm Ticket Booking</button>

            <div/>

>>>>>>> 90cf280159433b09b1d73f2581c1bc8e0a239d5b
          </div>
        </div>
      </div>
    </div>
  );
};
export default Viewing;

// booking branch
