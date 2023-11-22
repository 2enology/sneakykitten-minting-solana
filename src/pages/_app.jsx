import Head from "next/head";
import { useState } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

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
      <WalletModalProvider>
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
      </WalletModalProvider>
    </Wallet>
  );
}

export default StakingApp;
