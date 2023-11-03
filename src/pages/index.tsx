import type { NextPage } from "next";
// import { useState, useEffect } from "react";
// import { PublicKey } from "@solana/web3.js";
// import {
//   WalletModalProvider,
//   WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";
// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
// import { CREATOR_ADDRESS } from "../config";
// import { web3 } from "@project-serum/anchor";

import InfiniteSlider from "../components/InfiniteSlider";
import About from "../components/About";
import Collection from "../components/Collection";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Follow from "../components/Follow";
import Home from "../components/Home";

export interface NFTType {
  imgUrl: string;
  tokenId: string;
  description: string;
}

const HomePage: NextPage = () => {
  // const wallet = useWallet();
  // const [nftList, setNftList] = useState<NFTType[]>([]);
  // const [myBalance, setMyBalance] = useState<Number>(0);
  // const [selectState, setSlectState] = useState<boolean>(false);

  // useEffect(() => {
  //   getAllNfts();
  //   // eslint-disable-next-line
  // }, [wallet.publicKey, wallet.connected]);

  // const selectAll = () => {};

  // const getAllNfts = async () => {
  //   const solConnection = new web3.Connection(web3.clusterApiUrl("devnet"));
  //   if (wallet?.publicKey) {
  //     let balance = await solConnection.getBalance(wallet.publicKey);
  //     setMyBalance(balance);
  //   }

  //   if (wallet.publicKey === null) return;
  //   try {
  //     const nftList = await getParsedNftAccountsByOwner({
  //       publicAddress: wallet.publicKey.toBase58(),
  //       connection: solConnection,
  //     });

  //     let list: NFTType[] = [];
  //     if (nftList.length > 0) {
  //       for (let item of nftList) {
  //         if (item.data?.creators)
  //           if (item.data?.creators[0].address === CREATOR_ADDRESS) {
  //             try {
  //               const response = await fetch(item?.data.uri, {
  //                 method: "GET",
  //               });
  //               const responsedata = await response.json();
  //               console.log(responsedata);
  //               list.push({
  //                 imgUrl: responsedata.image,
  //                 tokenId: item?.data.name,
  //                 description: responsedata.description,
  //               });
  //             } catch (error) {
  //               console.error("Unable to fetch data:", error);
  //             }
  //           }
  //       }
  //     }

  //     console.log("nftList =>", list);
  //     setNftList(list);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const selectAllNFT = () => {
  //   setSlectState(true);
  // };
  // const clearSelectNFT = () => {
  //   setSlectState(false);
  // };
  // const sendNFT = () => {
  //   setSlectState(false);
  // };

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <Home />
      <InfiniteSlider />
      <About />
      <Collection />
      <Roadmap />
      <Team />
      <InfiniteSlider />
      <Faq />
      <Follow />
    </main>
  );
};

export default HomePage;
