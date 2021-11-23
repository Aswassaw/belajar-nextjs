import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

const Home = () => {
  const router = useRouter();

  // Redirect
  const handleClick = () => {
    setTimeout(() => {
      router.push("/product");
    }, 3000);
  };

  // Redirect with replace
  const handleReplace = () => {
    setTimeout(() => {
      router.replace("/product");
    }, 3000);
  };

  return (
    <div>
      <h1>Home Page</h1>

      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <br />
      <Link href='/product'>
        <a>Product</a>
      </Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
      <button onClick={handleReplace}>Place Order Replace</button>
    </div>
  );
};

export default Home;
