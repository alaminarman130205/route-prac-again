import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/post">Post</Link>
      </nav>
      <p>common header</p>
    </div>
  );
};

export default Header;
