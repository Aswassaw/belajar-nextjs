import React from "react";
import PostList from "../../components/PostList";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Post List</h1>

      <PostList posts={posts} />
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
}
