import React from "react";
import ProductList from "../../components/ProductList";

const Products = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>

      <ProductList products={products} />
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
