import Head from "next/head";
import Header from "../components/Header";
import Instructions from "../components/Instructions";
function HomePage() {
  return (
    <>
      <Head>
        <title>Simple light/dark mode in Next.js</title>
      </Head>
      <Header />
      <Instructions />
    </>
  );
}

export default HomePage;
