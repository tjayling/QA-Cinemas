import React from "react";
import Form from "../components/DiscussionsForm.jsx";
import CommentsFormat from "../components/CommentsFormat.jsx";

const Forum = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form />
      <div>{CommentsFormat()}</div>
    </div>
  );
};

export default Forum;