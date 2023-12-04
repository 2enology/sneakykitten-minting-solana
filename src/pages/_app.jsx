import Head from "next/head";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ToastContainer } from "react-toastify";

import Wallet from "../components/wallet/Wallet";
import Header from "../components/Header";
import MintInfoProvider from "../contexts/MintInfoProvider";

import "../styles/globals.css";

function StakingApp({ Component, pageProps }) {
  return (
    <Wallet>
      <WalletModalProvider>
        <MintInfoProvider>
          <Head>
            <title>SNEAKY KITTENS</title>
            <link rel="icon" href="/favicon.png" />
          </Head>
          <ToastContainer style={{ fontSize: 14 }} />
          <Header />
          <section className="flex items-center justify-center w-full">
            <Component {...pageProps} />
          </section>
        </MintInfoProvider>
      </WalletModalProvider>
    </Wallet>
  );
}

export default StakingApp;
