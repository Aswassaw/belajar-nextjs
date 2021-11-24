import { useRouter } from "next/router";
import React from "react";

const ProductDetail = ({ product }) => {
  const router = useRouter();

  return (
    <>
      <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
        <h3 style={{ margin: 0 }}>{product.title}</h3>
        <p style={{ margin: 0 }}>{product.price}</p>
        <p style={{ margin: 0 }}>{product.description}</p>
      </div>
      <button onClick={() => router.back()}>Back</button>
    </>
  );
};

export default ProductDetail;
