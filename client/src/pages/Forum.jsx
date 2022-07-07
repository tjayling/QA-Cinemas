import React from "react";
import Footer from "../components/Footer"
import MovieDatalist from "../components/MovieDatalist.jsx";
import { useState } from "react";
import Form from "../components/DiscussionsForm.jsx";
import CommentsFormat from "../components/CommentsFormat.jsx";

const Forum = () => {
  const [fetchData, setFetchData] = useState(true);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form getData={setFetchData} fetchData={fetchData} />
      <div>{CommentsFormat(setFetchData, fetchData)}</div>
    </div>
  );
};

export default Forum;