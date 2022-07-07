import React from "react";
import "../pages/Style/Discussions.css";

const Comment = ({ comment }) => {
  let stars = [];
  for (let i = 0; i < 10; i++) {
    stars.push(i < comment.rating ? "★" : "☆");
  }
  return (
    <div>
      <span className="comment-username">{comment.username}</span>
      <span className="stars" >{stars}</span>
      <p className="comment-text">{comment.comment}</p>
    </div>
  );
};

export default Comment;
