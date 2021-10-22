import Layout from "../components/Layout";

import AlertExpo from "../components/AlertExpo";
import Gallery from "../components/Gallery";

function Home({ image }) {
  return (
    <>
      <AlertExpo />
      <Gallery image={image} />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://api.pexels.com/v1/search?query=nature&per_page=1",
    {
      headers: {
        Authorization: process.env.PEXEL_API_KEY,
      },
    }
  );

  const image = await res.json();

  return {
    props: { image },
  };
}

export default Home;
