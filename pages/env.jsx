import React from "react";

const Env = ({ data }) => {
  return (
    <div>
      <div
        style={{ border: "1px solid black", margin: "25px", padding: "25px" }}
      >
        <h1>Hanya bisa lewat getServerSideProps:</h1>
        <h2>{data.user}</h2>
        <h2>{data.password}</h2>
        <hr />
        <h1>Public (bisa dari mana saja):</h1>
        <h2>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>
        <h2>{process.env.NEXT_PUBLIC_APP_NAME}</h2>
      </div>
    </div>
  );
};

export default Env;

export async function getServerSideProps() {
  return {
    props: {
      data: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
    },
  };
}
