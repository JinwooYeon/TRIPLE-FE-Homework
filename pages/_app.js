import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* 탭 정보 */}
      <Head>
        <title>트리플: 여행의 모든 것, 트리플로 한번에</title>
        <meta name="description" content="TRIPLE-FE-Homework" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
