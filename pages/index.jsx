import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => router.push("/users")}>Users</button>
      <button onClick={() => router.push("/posts")}>Posts</button>
    </div>
  );
};

export default Home;
