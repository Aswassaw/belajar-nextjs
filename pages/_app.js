import "../styles/globals.css";
import "../styles/layout.css";
import Head from "next/head";
import Header from "../components/miscellaneous/Header";
import Footer from "../components/miscellaneous/Footer";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ddd",
  },
};

function MyApp({ Component, pageProps }) {
  // Jika di suatu component terdapat fungsi bernama getLayout
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
            crossorigin='anonymous'
          />
          <script
            src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
            integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
            crossorigin='anonymous'
          ></script>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossorigin='anonymous'
        />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
          crossorigin='anonymous'
        ></script>
      </Head>
      <Header />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default MyApp;
