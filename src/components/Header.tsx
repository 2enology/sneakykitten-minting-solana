/* eslint-disable @next/next/no-img-element */
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import React, { useState, useCallback } from "react";

import { HamburgerElasticReverse } from "react-animated-burgers";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  return (
    <div className="relative">
      <div className="fixed z-50 flex items-center justify-center w-full bg-transparent bg-opacity-30 backdrop-blur-md">
        <div className="w-full flex justify-between p-[5px] max-w-[1440px]">
          <div className="flex items-center justify-center -z-10">
            <img src="/favicon.png" className="w-[80px] h-[80px]" alt="" />
          </div>
          <div className="font-extrabold text-[18px] text-gray-800 uppercase md:flex items-center justify-center gap-10 hidden">
            <a
              href="#about"
              className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
            >
              About
            </a>
            <a
              href="#roadmap"
              className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
            >
              Roadmap
            </a>
            <a
              href="#team"
              className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
            >
              Team
            </a>
            <a
              href="#faq"
              className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
            >
              Faq
            </a>
            <a
              href="#followus"
              className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
            >
              Follow us
            </a>
          </div>
          <div className="flex gap-[18px] items-center z-10">
            <button className="px-8 py-3 font-extrabold text-black duration-300 bg-white border-b-2 border-black rounded-lg hover:bg-gray-200">
              Mint Soon
            </button>
            {/* <div className="bg-[#FBBF2D] rounded-xl wallet">
          <WalletModalProvider>
            <WalletMultiButton />
          </WalletModalProvider>
        </div> */}
            <div className="z-50 flex justify-center item-center md:hidden">
              <HamburgerElasticReverse
                buttonColor="transparent"
                barColor="black"
                {...{ isActive, toggleButton }}
              />
            </div>
            <div className={`mobile-nav ${isActive ? "opened" : ""} `}>
              <div className="font-extrabold text-[38px] text-gray-800 uppercase md:flex items-center justify-center gap-10 flex flex-col w-full pt-[100px]">
                <a
                  href="#about"
                  className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
                >
                  About
                </a>
                <a
                  href="#roadmap"
                  className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
                >
                  Roadmap
                </a>
                <a
                  href="#team"
                  className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
                >
                  Team
                </a>
                <a
                  href="#faq"
                  className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
                >
                  Faq
                </a>
                <a
                  href="#followus"
                  className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600"
                >
                  Follow us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
