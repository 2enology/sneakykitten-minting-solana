import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";
const Collapse = () => {
  const [isOpen, setIsOpen] = useState(Array(4).fill(true));

  const toggleCollapse = (index: number) => {
    const updatedOpenState = isOpen.map((state, i) =>
      i === index ? !state : true
    );
    setIsOpen(updatedOpenState);
  };

  return (
    <div className="flex flex-col w-full gap-6 cursor-pointer">
      {isOpen.map((state, index) => (
        <Bounce key={`collapse-${index + 1}`}>
          <div
            key={`collapse-${index + 1}`}
            className="border-b-[8px] text-[40px] p-6 rounded-3xl border-2 border-black bg-[#fffdf1] transition-all duration-300"
            onClick={() => toggleCollapse(index)}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="font-bold font-Gulfs text-[20px] md:text-[30px]">
                {index === 0 && "WHAT IS SNEAKY KITTENS NFTS?"}
                {index === 1 && "WHAT ARE THE BENEFITS OF MINTING?"}
                {index === 2 &&
                  "HOW TO CLAIM 15% MINT BACK & SOL FROM FLAREDROP?"}
                {index === 3 && "WHY WE PICKED SOLANA BLOCKCHAIN?"}
              </h1>
              <div
                className={`flex items-center justify-center transform ${
                  state ? "rotate-0" : "rotate-180"
                } duration-300 transition-transform`}
              >
                <FaArrowDown color="black" size={20} />
              </div>
            </div>

            <motion.div
              style={{ overflow: "hidden" }}
              initial={state ? "open" : "collapsed"}
              animate={state ? "collapsed" : "open"}
              variants={{
                open: { height: "auto" },
                collapsed: { height: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg font-medium text-gray-600 leading-1">
                {index === 0 &&
                  "Sneaky Kittens NFTs are a collection of 5,000 uniquely designed digital kittens created by Sneaky Labs. These virtual felines exist on the Solana blockchain, a popular platform known for its speed and efficiency in handling transactions. Each Sneaky Kitten is distinct, with a diverse range of over 100 traits that give each one a unique appearance and personality. Owners of these NFTs can enjoy exclusive utilities that may include member benefits, access to events, or other digital assets. Additionally, holding a Sneaky Kitten NFT could provide a passive income stream, as owners might earn SOL, Solana's native cryptocurrency, on a monthly basis. This combination of artistry, exclusivity, and financial incentive makes Sneaky Kittens an appealing project for enthusiasts in the NFT space."}
                {index === 1 &&
                  `Community Rewards: A portion of the cost to mint new NFTs (15%) is allocated to existing NFT holders. This incentivizes early participation since the earlier you mint, the more you stand to gain from subsequent mints. 
                  Flare Delegation Pool: A substantial portion (25%) of the minting fees is directed towards the Flare delegation pool. This generates FLR tokens on a weekly basis and Flaredrops on a monthly basis. These are then converted to SOL and distributed among NFT holders. The mention of "28 months of Flaredrops" suggests that holders can expect to receive these distributions for over two years following their initial mint.
                  Secondary Sales: A 5% royalty from secondary sales of the NFTs is distributed to the current holders, providing a continuous benefit from the ongoing trade of the NFTs they own.`}
                {index === 2 &&
                  "To claim your 15% mint back from minting share, the process is streamlined through our dedicated decentralized application (dApp). We will provide a specialized dApp designed for the minting process. This will be the primary platform through which you can interact with our services.There will be a clearly marked 'Claim' option available on our website. Once you navigate to this option, you can easily claim your share of the mint back rewards and the SOL earned from Flaredrops."}
                {index === 3 &&
                  "We chose the Solana blockchain for our project due to its exceptional transaction speed and capacity, which ensures a smooth and efficient experience for users. Its low transaction fees make it economical for both minting and trading NFTs. Additionally, Solana's scalability and eco-friendly consensus mechanism provide a sustainable infrastructure that can grow with our project. The robust and supportive Solana community further enriches the ecosystem, offering a wealth of resources and opportunities for integration and collaboration."}
              </p>
            </motion.div>
          </div>
        </Bounce>
      ))}
    </div>
  );
};

export default Collapse;
