import React from "react";
import ListingsFormat from "../components/ListingsFormat.jsx";
const axios = require("axios");

const Listings = () => {
  return <div><h1>Listings</h1>
  <div class= "center" style={{ display: "flex" }}>
    {ListingsFormat()}
    </div>
    </div>;
};

export default Listings;
