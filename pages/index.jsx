import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => router.push("/users")}>Users</button>
      <button onClick={() => router.push("/posts")}>Posts</button>
      <button onClick={() => router.push("/products")}>Products</button>
      <button onClick={() => router.push("/news")}>News</button>
      <button onClick={() => router.push("/styling")}>Styling</button>
      <button onClick={() => router.push("/miscellaneous")}>Miscellaneous</button>
      <button onClick={() => router.push("/about")}>About</button>
    </div>
  );
};

export default Home;
