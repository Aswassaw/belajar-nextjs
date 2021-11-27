import React from "react";
import Footer from "../../components/miscellaneous/Footer";

const Miscellaneous = () => {
  return (
    <div>
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
