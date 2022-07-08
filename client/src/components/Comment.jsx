import React from "react";
import { Link } from "react-router-dom";
import "../pages/Style/Discussions.css";
import DeleteIcon from "../img/delete-icon.png";

const Comment = ({ comment }) => {
  let stars = [];
  for (let i = 0; i < 10; i++) {
    stars.push(i < comment.rating ? "★" : "☆");
  }
  return (
    <div>
      <span className="comment-username">{comment.username}</span>
      <span className="stars">{stars}</span>
      <p className="comment-text">{comment.comment}</p>
      <Link to={`/forum/delete-comment/${comment._id}`}>
        <img
          src={DeleteIcon}
          alt="delete"
          width="25px"
          style={{ position: "relative", left: "315px", bottom: "10px" }}
        />
      </Link>
    </div>
  );
};

export default Comment;
