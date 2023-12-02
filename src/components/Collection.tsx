/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function Collection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };
  const topOffset = scrollPosition * 1;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="w-full flex justify-center p-[5px] max-w-[1344px] flex-col md:mt-[200px]"
      id="collection"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-10 mx-10 my-10 lg:flex-row">
          <div className="relative">
            <p className="uppercase text-[40px] md:text-[80px] font-bold font-Gulfs text-[black]">
              Collection
            </p>
            <p className="uppercase text-xl -rotate-[20deg] font-bold font-Gulfs text-[#F8450B] absolute top-0 left-0">
              our
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 overflow-x-hidden">
        <div
          className={`flex gap-5 overflow-x-hidden`}
          style={{ transform: `translateX(${topOffset - 2100}px)` }}
        >
          <img
            src="img/nft1.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft2.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft3.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft4.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft5.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft6.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft7.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
        </div>
        <div
          className={`flex gap-5 overflow-x-hidden`}
          style={{ transform: `translateX(-${topOffset - 2200}px)` }}
        >
          <img
            src="img/nft8.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft9.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft10.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft11.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft12.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft13.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft14.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
        </div>
        <div
          className={`flex gap-5 overflow-x-hidden`}
          style={{ transform: `translateX(${topOffset - 2100}px)` }}
        >
          <img
            src="img/nft9.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft10.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft11.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft12.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft4.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft6.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="img/nft15.png"
            className="w-[250px] h-[250px] rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
