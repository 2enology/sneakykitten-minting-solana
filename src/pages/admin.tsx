/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useContext, useMemo } from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";
import { FadeLoader } from "react-spinners";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MintInfoContext } from "../contexts/MintInfoProvider";

import * as ToastGroup from "../components/ToastGroup";

export default function Admin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { allowAddr, treasuryVault } = useContext(MintInfoContext);
  const wallet = useWallet();
  const { publicKey } = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58() || "", [publicKey]);

  const handleClaimSol = async () => {
    try {
      if (!wallet.publicKey) {
        ToastGroup.warningAlert("Please Connect wallet!");
      } else {
        if (publicKey?.toBase58() === allowAddr) {
          setLoading(true);
          const confirmed = await axios.post(
            `https://sol.sneakylabs.art/user/claimTreasuryVault/`,
            {
              address: base58,
            },
            {
              validateStatus: () => true,
            }
          );
          if (confirmed.data.error || confirmed.status !== 200) {
            ToastGroup.errorAlert(
              `Error!${confirmed.data.error ? ` ${confirmed.data.error}` : ""}`
            );
          } else {
            if (confirmed.data?.message === "0 NFT minted") {
              ToastGroup.errorAlert(`Error! `);
            } else {
              ToastGroup.successAlert("Successfully Claimed!");
            }
            setLoading(false);
          }
        } else {
          ToastGroup.errorAlert("You are not a admin!");
        }
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 px-5 -z-3 bg-amber-400">
      <h1 className="font-Gulfs text-[30px]">
        Treasury Wallet Vault :
        <b>{(Number(treasuryVault) / 1000000000).toFixed(3)} </b>
        SOL
      </h1>
      <div
        className="flex items-center justify-center px-5 py-2 text-2xl bg-white border-b-2 border-black shadow-2xl cursor-pointer rounded-xl font-Gulfs"
        onClick={() => handleClaimSol()}
      >
        Claim now
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center uppercase font-extrabold ${
          loading
            ? "z-[99] opacity-1 bg-transparent backdrop-blur-xl transition-all duration-300 "
            : "-z-[9999] opacity-0 transition-all duration-300 "
        }`}
      >
        <FadeLoader color="black" /> CLAIMING...
      </div>
    </div>
  );
}
