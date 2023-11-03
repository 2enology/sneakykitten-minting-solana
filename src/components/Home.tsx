/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";

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
    <div className="w-full flex items-center justify-center flex-col bg-[#FBBF2D] md:min-h-[700px] min-h-[500px]">
      <div className="w-full max-w-[1440px] flex items-center justify-center text-center leading-1 flex-col relative">
        <Bounce>
          <h1 className="md:text-[100px] lg:text-[110px] text-[60px] text-red-500 font-Gulfs text-shadow1 mt-20">
            SNEAKY
            <br /> <span className="text-white">KITTENS</span>
          </h1>
        </Bounce>
        <div className="flex items-center justify-center w-full gap-2 mb-3">
          <a
            href="https://twitter.com/Sneaky_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200"
          >
            <FaTwitter />
            Twitter
          </a>{" "}
          <a
            href="https://twitter.com/Sneaky_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200"
          >
            <FaDiscord />
            Discord
          </a>
          <div className="absolute z-10 items-center justify-center hidden lg:flex right-10">
            <img src="img/rabbit.svg" alt="" />
          </div>
          <div className="absolute z-20 items-center justify-center hidden lg:flex right-12">
            <img src="img/circle.svg" alt="" />
          </div>
        </div>
        <img
          src={imgList[turn]}
          className={`w-[300px] delay-[2000ms] duration-1000 ${
            mounted ? "translate-y-0" : "translate-y-20"
          }`}
          alt=""
        />
        <div className="absolute bottom-0 left-0 flex-col items-start justify-center hidden md:flex">
          <h1 className="font-bold text-[15px]">A NEW WAVE</h1>
          <h1 className="font-bold text-[15px]">COLLECTION IS ABOUT</h1>
          <h1 className="font-bold text-[15px]">TO HIT THE SOLANA NETWORK</h1>
        </div>
      </div>
    </div>
  );
}
