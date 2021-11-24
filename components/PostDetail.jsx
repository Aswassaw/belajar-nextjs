import { useRouter } from "next/router";
import React from "react";

const PostDetail = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
        <h5 style={{ margin: 0 }}>{post.title}</h5>
        <p style={{ margin: 0 }}>{post.body}</p>
        <small>User Id: {post.userId}</small>
      </div>
      <button onClick={() => router.back()}>Back</button>
    </>
  );
};

export default PostDetail;
