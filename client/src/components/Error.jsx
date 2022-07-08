import React from "react";

const Error = ({ text, display }) => {
  if (display) {
    return <p>{text}</p>;
  }
};

export default Error;
