/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";
import Link from "next/link";

export default function Home() {
  const imgList = ["img/anim1.png", "img/anim2.png", "img/anim3.png"];
  const [mounted, setMounted] = useState(false);
  const [turn, setTurn] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTurn((prevTurn) => (prevTurn === 2 ? 0 : prevTurn + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col bg-[#FBBF2D] md:min-h-full min-h-[500px]">
      <div className="w-full max-w-[1440px] flex items-center justify-center text-center leading-1 flex-col relative">
        <Bounce>
          <h1 className="md:text-[100px] lg:text-[130px] text-[60px] text-red-500 font-Gulfs text-shadow1 mt-28 md:mt-20">
            SNEAKY
            <br /> <span className="text-white">KITTENS</span>
          </h1>
        </Bounce>
        <div className="flex items-center justify-center w-full gap-2 mb-3">
          <Link href={`/mint`} passHref>
            <div className="flex items-center justify-center gap-2 px-6 py-2 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg cursor-pointer hover:bg-gray-200">
              Mint now
            </div>
          </Link>
          <Link href={`/claim`} passHref>
            <button className="flex items-center justify-center gap-2 px-8 py-2 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200">
              Claim Now
            </button>
          </Link>
          <div className="absolute z-10 items-center justify-center hidden md:flex right-10 bottom-5">
            <img src="img/rabbit.svg" alt="" />
          </div>
          <div className="absolute z-20 items-center justify-center hidden md:flex right-12 element bottom-5">
            <img src="img/circle.svg" alt="" />
          </div>
        </div>
        <img
          src={imgList[turn]}
          className={`w-[380px] delay-[2000ms] duration-1000`}
          alt=""
        />
        <div className="absolute bottom-0 flex-col items-start justify-center hidden left-3 md:flex font-Gulfs">
          <h1 className="font-light md:text-[10px] lg:text-[15px]">
            A NEW WAVE
          </h1>
          <h1 className="font-light md:text-[10px] lg:text-[15px]">
            COLLECTION IS ABOUT
          </h1>
          <h1 className="font-light md:text-[10px] lg:text-[15px]">
            TO HIT THE SOLANA NETWORK
          </h1>
        </div>
      </div>
    </div>
  );
}
