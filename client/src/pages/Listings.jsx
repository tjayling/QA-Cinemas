import React from "react";
import ListingsFormat from "../components/ListingsFormat.jsx";

const Listings = () => {
  return (
    <div>
      <h1 className="page-title">Listings</h1>
      <div style={{ display: "flex" }}>{ListingsFormat()}</div>
    </div>
  );
};

export default Listings;
