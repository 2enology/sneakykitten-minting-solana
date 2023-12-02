/* eslint-disable @next/next/no-img-element */
import { Fade } from "react-awesome-reveal";

const Roadmap = () => {
  const cards = [];
  const cardInfo = [
    {
      image: "img/nft1.png",
      index: "01",
      date: "Q1 2023",
      title: "Brand and Community Building",
      content:
        "Launch of our social media platforms to grow our community and establish the Sneaky Kittens brand. Engagement and feedback from early supporters will shape the project.",
      done: true,
    },
    {
      image: "img/nft2.png",
      index: "02",
      date: "Q2 2023",
      title: "Website Launch and Marketing",
      content:
        "Our official website goes live, featuring a user-friendly interface and immersive lore of the Sneaky Kittens world. Marketing campaigns to amplify our presence.",
      done: true,
    },
    {
      image: "img/nft3.png",
      index: "03",
      date: "Q3 2023",
      title: "Collaborations and Partnerships",
      content:
        "Partnering with influencers and brands within the NFT space to expand our reach. Exclusive drops and collaborations to add value for our members.",
      done: false,
    },
    {
      image: "img/nft4.png",
      index: "04",
      date: "Q4 2023",
      title: "Minting Event and Secondary Market Listing",
      content:
        "Launch the minting of our 5k unique Sneaky Kittens NFTs. Listings on secondary markets will follow for trading and increased liquidity.",
      done: false,
    },
    {
      image: "img/nft5.png",
      index: "05",
      date: "Q1 2024",
      title: "Community Rewards Program",
      content:
        "Initiate the rewards program where 15% of minting costs are distributed to holders, increasing their investment value from the get-go.",
      done: false,
    },
    {
      image: "img/nft6.png",
      index: "06",
      date: "Q2 2024",
      title: "Holder Exclusive Benefits",
      content:
        "Implement a Flare delegation pool for monthly revenue sharing, and introduce a 5% royalty from secondary sales to our NFT holders. Ongoing community events and governance.",
      done: false,
    },
  ];
  for (let i = 0; i < 6; i++) {
    cards.push(
      <div
        className="card flex sm:flex-row flex-col justify-between p-[60px] items-center relative max-w-[1000px]"
        key={i}
        id="roadmap"
      >
        {cardInfo[i].done && (
          <div className="absolute top-0 right-0 sm:w-[160px] sm:h-[160px] w-[100px] h-[100px]">
            <img src="img/done.png" alt="" />
          </div>
        )}
        <div className="flex justify-center w-1/2 lg:border-r-2">
          <img
            src={cardInfo[i].image}
            className="w-full h-full p-2 rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5 px-0 lg:items-start sm:w-full sm:px-10">
          <div
            className={`${
              cardInfo[i].done ? "bg-[#E7F6E5]" : " bg-[#FEEADE]"
            } text-white py-5 rounded-2xl flex justify-center gap-3 items-center px-5`}
          >
            <p
              className={` text-white font-bold text-[28px] ${
                cardInfo[i].done ? "bg-[#29AF51]" : "bg-[#ff1515]"
              } px-4 rounded-3xl`}
            >
              {cardInfo[i].index}
            </p>
            <p
              className={`${
                cardInfo[i].done ? "text-[#29AF51]" : "text-[#ff1515]"
              } font-bold`}
            >
              {cardInfo[i].date}
            </p>
          </div>
          <p className="text-xl text-center text-black md:text-left font-Gulfs md:text-3xl">
            {cardInfo[i].title}
          </p>
          <p className="font-medium text-black text-md">
            {cardInfo[i].content}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-full flex justify-center p-[5px] max-w-[1340px] flex-col mt-10"
      id="roadmap"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-between gap-10 mx-10 my-10 lg:flex-row">
          <div className="relative">
            <p className="uppercase text-[40px] md:text-[80px] font-bold font-Gulfs text-[black]">
              roadmap
            </p>
            <p className="uppercase text-xl -rotate-[20deg] font-bold font-Gulfs text-[#F8450B] absolute top-0 left-0">
              our
            </p>
          </div>
          <p className="uppercase text-[20px] font-bold text-[black] text-center">
            {` Our roadmap is the compass that guides the Sneaky Kittens NFT
            project, marking out our journey from inception to realization and
            beyond. It's a declaration of our planned initiatives, a timeline of
            exciting milestones we aim to achieve, and a commitment to our
            community's growth and the value of their investments.`}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 mx-10">
          {cards}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
