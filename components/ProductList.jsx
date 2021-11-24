import Link from "next/link";
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
        >
          <h5 style={{ margin: 0 }}>{product.title}</h5>
          <p style={{ margin: 0 }}>{product.price}</p>
          {/* <Link href={`/products/${product.id}`} passHref>
            <button>Detail</button>
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
