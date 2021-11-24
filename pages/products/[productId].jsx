import { useRouter } from "next/router";
import React from "react";
import ProductDetail from "../../components/ProductDetail";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Product Detail</h1>

      <ProductDetail product={product} />
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:8000/products/${params.productId}`);
  const product = await res.json();

  if (!product.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /products/${params.productId}`);

  return {
    props: {
      product,
    },
  };
}
