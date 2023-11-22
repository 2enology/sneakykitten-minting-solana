import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { FaArrowLeft } from "react-icons/fa";
import { MAX_MINTAMOUNT_PERTX, MAX_SUPPLY } from "../config";
import Link from "next/link";

export default function Claim() {
  const imgList = ["img/anim1.png", "img/anim2.png", "img/anim3.png"];
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [mintCount, setMintCount] = useState(1);
  const [turn, setTurn] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTurn((prevTurn) => (prevTurn === 2 ? 0 : prevTurn + 1));
    }, 200);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="flex items-center justify-center w-full mt-[90px] flex-col">
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
          onClick={() => {}}
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
      {/* <div className="z-[9999] absolute top-0 bottom-0 left-0 right-0 bg-transparent bg-opacity-10 backdrop-blur-md flex items-center justify-center">
        <PuffLoader color="red" size={80} />
      </div> */}
    </div>
  );
}
