import React from "react";
import { useState } from "react";
import Form from "../components/DiscussionsForm.jsx";
import CommentsFormat from "../components/CommentsFormat.jsx";
import "../pages/Style/Discussions.css";

const Forum = () => {
  const [fetchData, setFetchData] = useState(true);
  return (
    <div className="forum-container">
      <h1 className="page-title">Movie Reviews</h1>
      <div className="form-container main-containers">
        <h2>Leave a review</h2>
        <Form getData={setFetchData} fetchData={fetchData} />
      </div>
      <div className="reviews-container main-containers">
        <h2>Recent Reviews</h2>
        {CommentsFormat(setFetchData, fetchData)}
      </div>
    </div>
  );
};

export default Forum;
