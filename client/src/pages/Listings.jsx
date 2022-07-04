import React from "react";
import ListingsFormat from "../components/ListingsFormat.jsx";
const axios = require("axios");

const Listings = () => {
  return <div style={{ display: "flex" }}>{ListingsFormat()}</div>;
};

export default Listings;
