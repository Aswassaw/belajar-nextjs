import React from "react";
import PostDetail from "../../components/PostDetail";

const Post = ({ post }) => {
  return (
    <div>
      <h1>Post Detail</h1>

      <PostDetail post={post} />
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:8000/posts/${params.postId}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
