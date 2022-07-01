import React from "react";
const Comment = ({ comment }) => {
  let stars = [];
  for (let i = 0; i < 10; i++) {
    stars.push(i < comment.rating ? "★" : "☆");
  }
  return (
    <div>
      <h3>{comment.username}</h3>
      <p style={{ fontSize: "25px", color: "gold" }}>{stars}</p>
      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
