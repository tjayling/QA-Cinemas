import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const axios = require("axios");

const DeleteComment = () => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .delete(`http://localhost:3000/discussion/delete/${id}`)
      .then((window.location.href = "http://localhost:3001/forum"))
      .catch((error) => console.error(error));
  });
};

export default DeleteComment;
