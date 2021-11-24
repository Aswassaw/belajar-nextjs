// import { useRouter } from "next/router";
import React from "react";
import PostDetail from "../../components/PostDetail";

const Post = ({ post }) => {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div>
      <h1>Post Detail</h1>

      <PostDetail post={post} />
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  // const res = await fetch(`http://localhost:8000/posts`);
  // const posts = await res.json();

  // const paths = posts.slice(0, 3).map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   };
  // });

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
    // paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:8000/posts/${params.postId}`);
  const post = await res.json();

  // Jika post tidak ditemukan
  if (!post.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts/${params.postId}`);

  return {
    props: {
      post,
    },
  };
}
