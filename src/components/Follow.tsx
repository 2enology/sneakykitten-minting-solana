import { useEffect, useState } from "react";
import {
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Follow() {
  const [isVisible, setIsVisible] = useState(false);
  const [clickScrollTopBtnState, setClickScrollTopBtnState] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setClickScrollTopBtnState(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setClickScrollTopBtnState(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="flex items-center justify-center w-full mb-10"
      id="followus"
    >
      <div className="w-full flex justify-center p-[5px] max-w-[1340px] flex-col">
        <div className="flex flex-col w-full mt-10">
          <span className="flex items-center justify-center gap-3 ">
            <span className="md:text-[70px] text-[30px] font-Gulfs text-[#FFFDF1] text-shadow1">
              FOLLOW US
            </span>{" "}
          </span>
          <span className="flex items-center justify-center gap-3 ">
            <span className="md:text-[70px] text-[30px] font-Gulfs text-black">
              ON SOCIAL
            </span>{" "}
          </span>
          <span className="flex items-center justify-center gap-3 ">
            <span className="md:text-[70px] text-[30px] font-Gulfs text-black">
              MEDIA
            </span>{" "}
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://twitter.com/Sneaky_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-gray-800 rounded-full shadow-xl cursor-pointer shadow-gray-700"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://discord.gg/55PAppga"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-gray-800 rounded-full shadow-xl cursor-pointer shadow-gray-700"
          >
            <FaDiscord size={30} />
          </a>
        </div>
      </div>

      {isVisible && (
        <div
          className="fixed bottom-10 right-10 p-3 bg-[#FFFDF1] border-[1px] border-black shadow-xl rounded-full cursor-pointer animate-bounce z-50"
          onClick={() => scrollToTop()}
        >
          <FaArrowUp color="black" />
        </div>
      )}
    </div>
  );
}
