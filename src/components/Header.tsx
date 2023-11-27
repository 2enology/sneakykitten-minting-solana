/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { HamburgerElasticReverse } from "react-animated-burgers";
import { AuthButton } from "./AuthButton";

interface HeaderLink {
  li: string;
  link: string;
}

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  const headerLI: HeaderLink[] = [
    { li: "About", link: "#about" },
    { li: "Roadmap", link: "#roadmap" },
    { li: "Team", link: "#team" },
    { li: "Faq", link: "#faq" },
    { li: "Followus", link: "#followus" },
  ];

  const renderHeaderLinks = () => {
    return headerLI.map((item, index) => (
      <a
        href={item.link}
        key={index}
        className="list-none transition-all duration-300 cursor-pointer hover:text-gray-600 font-Gulfs"
      >
        {item.li}
      </a>
    ));
  };

  return (
    <div className="fixed flex items-center justify-center w-full bg-transparent bg-opacity-30 backdrop-blur-md z-[49]">
      <div className="w-full flex justify-between p-[5px] max-w-[1440px]">
        <Link href={"/"}>
          <div className="flex items-center justify-center cursor-pointer -z-10 md:z-10">
            <img src="/favicon.png" className="w-[80px] h-[80px]" alt="" />
          </div>
        </Link>
        <div className="font-extrabold text-[18px] text-gray-800 uppercase md:flex items-center justify-center gap-10 hidden">
          {renderHeaderLinks()}
        </div>
        <div className="flex gap-[18px] items-center z-10">
          <AuthButton />
          <div className="z-50 flex justify-center item-center md:hidden">
            <HamburgerElasticReverse
              buttonColor="transparent"
              barColor="black"
              isActive={isActive}
              toggleButton={toggleButton}
            />
          </div>
          <div className={`mobile-nav ${isActive ? "opened" : ""}`}>
            <div className="font-extrabold text-[38px] text-gray-800 uppercase md:flex items-center justify-center gap-10 flex flex-col w-full pt-[100px]">
              {renderHeaderLinks()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
