import { useEffect, useState } from "react";
import { FaTwitter, FaDiscord, FaArrowUp } from "react-icons/fa";

export default function Follow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
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
      <div className="w-full flex justify-center p-[5px] max-w-[1344px] flex-col">
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <div className="relative">
            <p className="uppercase text-[40px] md:text-[80px] font-bold font-Gulfs text-white text-shadow1">
              Follow
            </p>
            <p className="uppercase text-xl -rotate-[20deg] font-bold font-Gulfs text-[#F8450B] absolute top-0 left-0">
              Us
            </p>
          </div>
          <span className="flex items-center justify-center gap-3 ">
            <span className="md:text-[60px] text-[30px] font-Gulfs text-black">
              ON SOCIAL
            </span>{" "}
          </span>
          <span className="flex items-center justify-center gap-3 ">
            <span className="md:text-[60px] text-[30px] font-Gulfs text-black">
              MEDIA
            </span>{" "}
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://twitter.com/Sneaky_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-all duration-300 bg-white border-2 border-gray-800 rounded-full shadow-xl cursor-pointer shadow-gray-700 hover:translate-y-1"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://discord.gg/55PAppga"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-all duration-300 bg-white border-2 border-gray-800 rounded-full shadow-xl cursor-pointer shadow-gray-700 hover:translate-y-1"
          >
            <FaDiscord size={30} />
          </a>
        </div>
      </div>

      {isVisible && (
        <div
          className="fixed bottom-10 right-10 p-3 bg-[#FFFDF1] border-[1px] border-black shadow-2xl rounded-xl cursor-pointer z-50"
          onClick={() => scrollToTop()}
        >
          <FaArrowUp color="black" />
        </div>
      )}
    </div>
  );
}
