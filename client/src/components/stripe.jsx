import { useState } from "react";
 
import StripeCheckout from "react-stripe-checkout";
 
import axios from "axios";
 
import { toast } from "react-toastify";
 
import "react-toastify/dist/ReactToastify.css";
 
function Checkout() {
 
 
  const [product] = useState({
    name: "Ticket",
    price: 1,
    amount: 1,
    description: "Cinema ticket",
  });
 
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:3000/checkout",
      { token, product }
    );
 
    console.log(response.status)
 
    if (response.status === 200) {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
 
  return (
    <div className="App">
      <div className="container">
        <br />
        <br />
        <h1 className="text-center">Stripe Checkout</h1>
        <br />
        <h2 className="text-center">Ticket Booking Info:</h2>
        <h3 className="text-center">Film Title: {product.name}</h3>
        <h3 className="text-center"> Quantity of Tickets: {product.amount}</h3>
        <h3 className="text-center">Total Price: £{product.price}</h3>
        <br />
        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_qblFNYngBkEdjEZ16jxxoWSM"
            token={handleToken}
            amount={product.price * 100}
            name="Sample Book"
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  );
}
 
export default Checkout;