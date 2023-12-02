/* eslint-disable @next/next/no-img-element */
import { Fade, Slide } from "react-awesome-reveal";
import { FaArrowDown } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex items-center justify-center w-full mt-10" id="about">
      <div className="w-full flex justify-center p-[5px] max-w-[1340px] flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center gap-10 mx-10 my-10 lg:flex-row">
            <div className="relative">
              <p className="uppercase text-[40px] md:text-[80px] font-bold font-Gulfs text-[black]">
                About Us
              </p>
              <p className="uppercase text-xl -rotate-[20deg] font-bold font-Gulfs text-[#F8450B] absolute top-0 left-0">
                our
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 mt-10">
          <Fade>
            <span className="flex items-center justify-center gap-3">
              <span className="text-[20px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-Gulfs text-[#FFFDF1] text-shadow2">
                5000
              </span>{" "}
              <img
                src="/img/monster.svg"
                className="w-[30px] h-[30px] md:w-[70px] md:h-[70px]"
                alt=""
              />{" "}
              <span className="text-[20px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-Gulfs text-black">
                SNEAKY KITTENS
              </span>
            </span>
            <span className="flex items-center justify-center gap-3 ">
              <span className="text-[20px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-Gulfs text-black">
                BUILD
              </span>{" "}
              <img
                src="/img/monster2.svg"
                className="w-[30px] h-[30px] md:w-[70px] md:h-[70px]"
                alt=""
              />{" "}
              <span className="text-[20px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-Gulfs text-[#FFFDF1] text-shadow2">
                PASSIVE INCOME
              </span>
            </span>
            <span className="flex items-center justify-center gap-3 ">
              <span className="text-[20px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-Gulfs text-[#FFFDF1] text-shadow2">
                SOLANA
              </span>{" "}
              <img
                src="/img/monster3.svg"
                className="w-[30px] h-[30px] md:w-[70px] md:h-[70px]"
                alt=""
              />{" "}
              <span className="text-[20px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-Gulfs text-black">
                BLOCKCHAIN
              </span>
            </span>
            <span className="flex items-center justify-center gap-3 ">
              <span className="text-lg font-extrabold text-center text-gray-700">
                {` Discover our enchanting collection of 5,000 unique Sneaky Kittens
              NFTs, each with its own personality and charm. As a part of our
              community, you’re not just owning a piece of digital art, you're
              stepping into a world of adventure and unlocking a path to
              fantastic passive income.`}
              </span>
            </span>
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <div className="flex items-center justify-center gap-2">
                <FaArrowDown color="black" size={25} />
                <span className="text-[20px] md:text-[25px] lg:text-[30px] xl:text-[40px] font-Gulfs text-red-500 text-shadow2">
                  Benefits of NFTs
                </span>
                <FaArrowDown color="black" size={25} />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-xl p-4 max-w-[1000px] border-b-[8px] border-black border-[1px]">
                <span className="font-semibold text-center text-gray-700">
                  <span className="text-2xl font-bold text-center text-red-500 font-Gulfs">
                    {" "}
                    {`1. Community Rewards`}{" "}
                  </span>
                  <br />
                  <span className="text-lg font-bold text-center text-gray-700">
                    {" "}
                    {` 15% of the mint cost is shared with NFT holders. Mint early to claim a larger share of every new mint!`}{" "}
                  </span>
                </span>
                <span className="text-lg font-semibold text-center text-gray-700">
                  <span className="text-2xl font-bold text-center text-red-500 font-Gulfs">
                    {" "}
                    {`2. Flare Delegation Pool:`}{" "}
                  </span>
                  <br />
                  <span className="text-lg font-bold text-center text-gray-700">
                    {" "}
                    {`25% of the mint cost supports the Flare delegation pool, earning FLR weekly and Flaredrops monthly, which are converted to SOL for distribution to NFT holders.`}{" "}
                    {`And yes, 28 months of Flaredrops are still coming!`}
                  </span>
                </span>
                <span className="text-lg font-semibold text-center text-gray-700">
                  <span className="text-2xl font-bold text-center text-red-500 font-Gulfs">
                    {" "}
                    {`3. Secondary Sales:`}{" "}
                  </span>
                  <br />
                  <span className="text-lg font-bold text-center text-gray-700">
                    {" "}
                    {`Enjoy a 5% return from secondary sales directly to NFT holders.`}{" "}
                  </span>
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
