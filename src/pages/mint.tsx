import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { FadeLoader } from "react-spinners";
import { FaArrowLeft } from "react-icons/fa";
import { MAX_MINTAMOUNT_PERTX, MAX_SUPPLY } from "../config";
import Link from "next/link";

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

export default function Mint() {
  const imgList = ["img/anim1.png", "img/anim2.png", "img/anim3.png"];
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [mintCount, setMintCount] = useState(1);
  const [turn, setTurn] = useState(0);
  const wallet = useWallet();
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

  const handleMintWithPhantom = async (
    connection: Connection,
    wallet: WalletContextState,
    totalToMint: number
  ) => {
    setLoading(true);
    try {
      if (!wallet.publicKey) {
        return;
        warningAlert("Please Connect wallet!");
      }
      setLoading(true);
      const blockhash = await connection.getLatestBlockhash();
      const tx = new Transaction().add(
        solInstruction(
          wallet?.publicKey,
          new PublicKey(devNet),
          +(cost * totalToMint).toFixed(4)
        )
      );
      tx.feePayer = wallet?.publicKey;
      tx.recentBlockhash = blockhash.blockhash;
      let signedTx;
      if (wallet.signTransaction !== undefined) {
        signedTx = await wallet.signTransaction(tx);
        let txId = await connection.sendRawTransaction(signedTx.serialize(), {
          skipPreflight: true,
          maxRetries: 3,
          preflightCommitment: "confirmed",
        });
        await connection.confirmTransaction(txId, "confirmed");
        const confirmed = await axios.post(
          `https://solgods.onrender.com/user/mintart/`,
          {
            hash: txId,
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
            errorAlert(`Error! Something went wrong minting your NFT.`);
          } else {
            successAlert("Successfully minted!");
          }
          setLoading(false);
        }
      }
    } catch (e: any) {
      console.log(e);
      //   const msg = fromTxError(e);
      //   if (msg) {
      //     toast.error(msg.message);
      //   } else {
      //     const msg = e.message || e.toString();
      //     toast.error(msg);
      //   }
    } finally {
      setLoading(false);
    }
    // // refetchBalance();
  };

  const solInstruction = (
    fromPubkey: PublicKey,
    toPubkey: PublicKey,
    amount: number
  ) => {
    return SystemProgram.transfer({
      fromPubkey: fromPubkey,
      toPubkey: toPubkey,
      lamports: Math.round(amount * LAMPORTS_PER_SOL),
    });
  };

  return (
    <div className="flex items-center justify-center w-full mt-[90px] flex-col -z-3">
      <img src={imgList[turn]} className={`w-[380px]`} alt="" />
      <div className="flex flex-col items-center justify-between border-2 border-gray-200 w-[365px] mr-3 p-2 rounded-lg">
        {" "}
        <h1 className="text-2xl font-extrabold">Mint Price : 1000 Sol</h1>
        <div className="flex items-center justify-between w-full">
          <span
            className={`text-black text-[45px] font-bold ${
              mintCount === 1
                ? "cursor-not-allowed text-gray-400"
                : "cursor-pointer"
            }`}
            onClick={() => mintCount > 1 && setMintCount(mintCount - 1)}
          >
            -
          </span>
          <span className="text-black text-[50px] font-bold">{mintCount}</span>
          <span
            className={`text-black text-[45px] font-bold ${
              mintCount === 5
                ? "cursor-not-allowed text-gray-400"
                : "cursor-pointer"
            }`}
            onClick={() =>
              mintCount < MAX_MINTAMOUNT_PERTX && setMintCount(mintCount + 1)
            }
          >
            +
          </span>
        </div>
        <div className="flex items-center justify-center w-full">
          <h1 className="">
            <span className="lg:text-[50px] text-[30px] font-medium ">
              {totalSupply.toString().padStart(2, "0")}
            </span>
            /
            <span className="text-[20px] font-bold text-[#707070]">
              {MAX_SUPPLY}
            </span>
          </h1>
        </div>
        <button
          className="flex items-center justify-center gap-3 px-5 py-3 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200"
          onClick={() => {
            handleMintWithPhantom(rpcUrl, wallet, mintCount);
          }}
        >
          Mint Now
        </button>
      </div>
      <Link href={"/"}>
        <span className="flex items-center justify-center gap-4 mt-5 font-extrabold transition-all duration-300 cursor-pointer hover:-translate-x-3">
          <FaArrowLeft />
          Back to Home
        </span>
      </Link>
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
