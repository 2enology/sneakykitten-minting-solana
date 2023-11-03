import Head from "next/head";
import { useState } from "react";

import Wallet from "../components/wallet/Wallet";
import Header from "../components/Header";
import "../styles/globals.css";

function StakingApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const closeLoading = () => {
    setLoading(false);
  };

  return (
    <Wallet>
      <Head>
        <title>SNEAKY KITTENS</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <section className="flex items-center justify-center w-full">
        <Component
          {...pageProps}
          startLoading={startLoading}
          closeLoading={closeLoading}
        />
      </section>
    </Wallet>
  );
}

export default StakingApp;
