import { useRouter } from "next/dist/client/router";
import React from "react";

const Doc = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Doc Home Page</h1>
      <p>Params 1: {router.query.params && router.query.params[0]}</p>
      <p>Params 2: {router.query.params && router.query.params[1]}</p>
    </div>
  );
};

export default Doc;
