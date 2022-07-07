import React from "react";
import { useState } from "react";
import Form from "../components/DiscussionsForm.jsx";
import CommentsFormat from "../components/CommentsFormat.jsx";

const Forum = () => {
  const [fetchData, setFetchData] = useState(true);
  return (
    <div>
      <h1>Welcome to the review page</h1>

    <div class="row justify-content-center">
    <div class="col-6">
      <h2>Set your review</h2>
      <p> Leave a review for a recent movie</p>
      <Form getData={setFetchData} fetchData={fetchData} />
      </div>
      <div class="col-6">
      <h2>Recent Reviews</h2>
      <div>{CommentsFormat(setFetchData, fetchData)}</div>
    </div>
</div>
</div>
  );
};

export default Forum;