import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Viewing = () => {
  let viewing = JSON.parse(useLocation().state.viewing);
  let movie = JSON.parse(useLocation().state.movie);

  console.table(viewing);

  const [totalPrice, setTotalPrice] = useState(1);
  const [emails, setEmails] = useState("");

  const [product] = useState({
    title: movie.title,
    price: `£${totalPrice}.00`,
    amount: `${totalPrice}`,
    description: "Cinema tickets",
  });

  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:3000/checkout", {
      token,
      product,
    });

    console.log(response.status);

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
          $id: `${viewingId}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          window.location.replace("http://localhost:3001/payment");
          bookingId++;
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{movie.title}</h1>
      <img src={movie.img_link} alt={`${movie.title} cover`} width="200px" />
      <p>
        Screen {viewing.screen.$id}
        <br />
        Time {viewing.time}
      </p>
      <div>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-black dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Tickets
          </button>
          <div class="dropdown-menu">
            <div class="dropdown-header">Cinema Tickets</div>
            <a class="dropdown-item">Adult</a>
            <a class="dropdown-item">Children</a>
            <a class="dropdown-item">Student</a>
            <a class="dropdown-item">Senior</a>
          </div>
          <div>
            <select id="tickets">
              {" "}
              <option value="Select"> </option>{" "}
              <option value="Adult"> Adult </option>{" "}
              <option value="Children"> Children</option>{" "}
              <option value="Student"> Student</option>{" "}
              <option value="Senior"> Senior</option>
            </select>
            <select id="quantity">
              {" "}
              <option value="0"> 0 </option> <option value="1"> 1 </option>{" "}
              <option value="2"> 2</option> <option value="3"> 3</option>{" "}
              <option value="4"> 4</option> <option value="5"> 5 </option>
            </select>
            <select id="pricing">
              {" "}
              <option value="0"> 0 </option> <option value="1"> 1-£1 </option>{" "}
              <option value="2"> 2-£2</option> <option value="3"> 3-£3 </option>{" "}
              <option value="4"> 4-£4 </option>{" "}
              <option value="5"> 5-£5 </option>
            </select>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Viewing;

// booking branch
