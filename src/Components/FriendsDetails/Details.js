import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <small> id :{friend.id}</small>
      <h1>Name :{friend.name}</h1>
      <h5>phone : {friend.phone}</h5>
      <p>Email : {friend.email}</p>
    </div>
  );
};

export default Details;
