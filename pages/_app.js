import "../styles/globals.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname === "/") {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
