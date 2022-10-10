import React from "react";
import { useLoaderData } from "react-router-dom";
import Single from "../singlePost/Single";

const Post = () => {
  const post = useLoaderData();
  return (
    <div>
      {post.map((post) => (
        <Single key={post.id} post={post}></Single>
      ))}
    </div>
  );
};

export default Post;
