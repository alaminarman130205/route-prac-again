import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Single.css";

const Single = ({ post }) => {
  const { id, title, body } = post;
  const nevigate = useNavigate();
  const handleNevigate = () => {
    nevigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button>show details</button>
      </Link>
      <button onClick={handleNevigate}>show details too</button>
    </div>
  );
};

export default Single;
