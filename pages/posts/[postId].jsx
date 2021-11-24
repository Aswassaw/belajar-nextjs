import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div>
      <h1>Post Detail</h1>

      <PostDetail post={post} />
    </div>
  );
};

export default PostDetail;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
