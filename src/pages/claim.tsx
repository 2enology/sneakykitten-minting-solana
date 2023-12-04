/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useContext, useMemo, useEffect } from "react";
import axios from "axios";
import { useWallet } from "@solana/wallet-adapter-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

import { MintInfoContext } from "../contexts/MintInfoProvider";
import * as ToastGroup from "../components/ToastGroup";

export default function Claim() {
  const imgList = ["img/anim1.png", "img/anim2.png", "img/anim3.png"];
  const {
    totalSupply,
    getMintInfo,
    claimAmount,
    ownNftCounts,
    lifeTimeReward,
  } = useContext(MintInfoContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [turn, setTurn] = useState(0);
  const wallet = useWallet();
  const { publicKey } = useWallet();

  const base58 = useMemo(() => publicKey?.toBase58() || "", [publicKey]);

  const handleClaimReward = async () => {
    try {
      if (!wallet.publicKey) {
        ToastGroup.warningAlert("Please Connect wallet!");
      } else if (claimAmount === 0) {
        ToastGroup.warningAlert("Claim amount is 0!");
      } else {
        setLoading(true);
        const confirmed = await axios.post(
          `https://sol.sneakylabs.art/user/claimReward/`,
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
            window.location.reload();
            await getMintInfo();
          }
          setLoading(false);
        }
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTurn((prevTurn) => (prevTurn === 2 ? 0 : prevTurn + 1));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-3 -z-3 bg-amber-400">
      <img src={imgList[turn]} className={`w-[380px]`} alt="" />
      <div className="flex flex-col items-center justify-between shadow-2xl md:w-[505px] w-full md:mr-3 p-2 rounded-xl gap-5">
        {" "}
        <h1 className="font-extrabold uppercase text-md md:text-2xl">
          Total NFTs : {totalSupply} s
        </h1>
        <h1 className="font-extrabold uppercase text-md md:text-2xl">
          My NFTs : {ownNftCounts} s
        </h1>
        <h1 className="font-extrabold uppercase text-md md:text-2xl">
          Claim Rewards : {claimAmount?.toFixed(3)} Sol
        </h1>
        <h1 className="font-extrabold uppercase text-md md:text-2xl">
          Lifetime Rewards : {lifeTimeReward?.toFixed(3)} Sol
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
        <Link href={"/"} passHref>
          <span className="flex items-center justify-center gap-4 mt-5 font-extrabold transition-all duration-300 cursor-pointer hover:-translate-x-3">
            <FaArrowLeft />
            Back to Home
          </span>
        </Link>
        <Link href={"/mint"} passHref>
          <span className="flex items-center justify-center gap-4 mt-5 font-extrabold transition-all duration-300 cursor-pointer hover:translate-x-3">
            To Mint Page
            <FaArrowRight />
          </span>
        </Link>
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center font-bold uppercase ${
          loading
            ? "z-[99] opacity-1 bg-transparent backdrop-blur-xl transition-all duration-300 "
            : "-z-[9999] opacity-0 transition-all duration-300 "
        }`}
      >
        <FadeLoader color="black" /> Claiming...
      </div>
    </div>
  );
}
