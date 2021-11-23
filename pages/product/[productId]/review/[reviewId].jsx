import { useRouter } from "next/dist/client/router";
import React from "react";

const ProductReview = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Product - {router.query.productId}</h1>
      <h2>Review - {router.query.reviewId}</h2>
    </div>
  );
};

export default ProductReview;
