import { useEffect, useState, useContext, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { FadeLoader } from "react-spinners";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MAX_MINTAMOUNT_PERTX, MAX_SUPPLY } from "../config";
import Link from "next/link";
import { MintInfoContext } from "../contexts/MintInfoProvider";

import { WalletContextState } from "@solana/wallet-adapter-react";
import axios from "axios";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";
import {
  errorAlert,
  successAlert,
  warningAlert,
} from "../components/toastGroup";

export default function Claim() {
  const imgList = ["img/anim1.png", "img/anim2.png", "img/anim3.png"];
  const { totalSupply, getMintInfo, claimAmount, ownNftCounts } =
    useContext(MintInfoContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [mintCount, setMintCount] = useState(1);
  const [turn, setTurn] = useState(0);
  const wallet = useWallet();
  const { publicKey } = useWallet();

  const base58 = useMemo(() => publicKey?.toBase58() || "", [publicKey]);

  const devNet = "DH8ozTSc4ZxeHTw15MyLUGCdfytSBTSvYP4erXw1P8wk";
  const cost = 0.25;

  const rpcUrl = new Connection("https://api.devnet.solana.com");
  useEffect(() => {
    const interval = setInterval(() => {
      setTurn((prevTurn) => (prevTurn === 2 ? 0 : prevTurn + 1));
    }, 200);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClaimReward = async () => {
    setLoading(true);
    try {
      if (!wallet.publicKey) {
        warningAlert("Please Connect wallet!");
      }

      setLoading(true);
      console.log("here starts");
      const confirmed = await axios.post(
        `http://144.126.146.144:8090/user/claimReward/`,
        {
          address: base58,
        },
        {
          validateStatus: () => true,
        }
      );
      if (confirmed.data.error || confirmed.status !== 200) {
        errorAlert(
          `Error!${confirmed.data.error ? ` ${confirmed.data.error}` : ""}`
        );
      } else {
        if (confirmed.data?.message === "0 NFT minted") {
          errorAlert(`Error! `);
        } else {
          successAlert("Successfully Claimed!");
          await getMintInfo();
        }
        setLoading(false);
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
    // // refetchBalance();
  };

  return (
    <div className="flex items-center justify-center w-full mt-[90px] flex-col -z-3">
      <img src={imgList[turn]} className={`w-[380px]`} alt="" />
      <div className="flex flex-col items-center justify-between border-2 border-gray-200 w-[365px] mr-3 p-2 rounded-lg gap-5">
        {" "}
        <h1 className="text-2xl font-extrabold">
          Total NFTs : {totalSupply} s
        </h1>
        <h1 className="text-2xl font-extrabold">My NFTs : {ownNftCounts} s</h1>
        <h1 className="text-2xl font-extrabold">
          Claim Rewards : {claimAmount?.toFixed(5)} Sol
        </h1>
        <button
          className="flex items-center justify-center gap-3 px-5 py-3 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200"
          onClick={() => {
            handleClaimReward();
          }}
        >
          Claim Now
        </button>
      </div>
      <div className="flex items-center justify-between gap-5">
        <Link href={"/"}>
          <span className="flex items-center justify-center gap-4 mt-5 font-extrabold transition-all duration-300 cursor-pointer hover:-translate-x-3">
            <FaArrowLeft />
            Back to Home
          </span>
        </Link>
        <Link href={"/mint"}>
          <span className="flex items-center justify-center gap-4 mt-5 font-extrabold transition-all duration-300 cursor-pointer hover:translate-x-3">
            To Mint Page
            <FaArrowRight />
          </span>
        </Link>
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center ${
          loading
            ? "z-[99] opacity-1 bg-transparent backdrop-blur-xl transition-all duration-300 "
            : "-z-[9999] opacity-0 transition-all duration-300 "
        }`}
      >
        <FadeLoader color="black" />
      </div>
    </div>
  );
}
