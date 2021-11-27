import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/miscellaneous/Footer";
import imgBlue from '../../public/blue.png';

const Miscellaneous = () => {
  return (
    <div>
      <Head>
        <title>Humanism</title>
        <meta name='description' content='Belajar NextJS' />
      </Head>
      <h1>Manusia Besi</h1>
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <Image alt="Image" src={imgBlue} width='500' height='500' />
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <Image alt="Image" src='/green.png' width='500' height='500' />
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <Image alt="Image" src='/purple.png' width='500' height='500' />
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <Image alt="Image" src='/red.png' width='500' height='500' />
        </div>
      </div>
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
