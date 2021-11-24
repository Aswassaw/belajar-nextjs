import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
        >
          <h5 style={{ margin: 0 }}>{post.title}</h5>
          <p style={{ margin: 0 }}>{post.body}</p>
          <Link href={`/posts/${post.id}`} passHref>
            <button>Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
