import React from "react";
import Head from "next/head";
import Footer from "../../components/miscellaneous/Footer";

const Miscellaneous = () => {
  return (
    <div>
      <Head>
        <title>Humanism</title>
        <meta name="description" content="Belajar NextJS" />
      </Head>
      <h1>Manusia Besi</h1>
    </div>
  );
};

export default Miscellaneous;

Miscellaneous.getLayout = (page) => (
  <>
    {page}
    <Footer />
  </>
);
