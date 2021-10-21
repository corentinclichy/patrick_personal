import Layout from "../components/Layout";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
