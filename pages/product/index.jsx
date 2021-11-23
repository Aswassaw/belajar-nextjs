import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <h2>
        <Link href='/product/1'>
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href='/product/2'>
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        {/* Replace saat back akan kembali ke home */}
        <Link href='/product/3' replace>
          <a>Product 3</a>
        </Link>
      </h2>

      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  );
};

export default ProductList;
