import { AttentionSeeker, Bounce, Fade, Hinge } from "react-awesome-reveal";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div
      className="w-full flex justify-center p-[5px] max-w-[1344px] flex-col pt-[50px]"
      id="team"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-10 mx-10 my-10 lg:flex-row">
          <div className="relative">
            <p className="uppercase text-[40px] md:text-[80px] font-bold font-Gulfs text-[black]">
              Team
            </p>
            <p className="uppercase text-xl -rotate-[20deg] font-bold font-Gulfs text-[#F8450B] absolute top-0 left-0">
              our
            </p>
          </div>
        </div>
        <Fade>
          <div className="grid w-full gap-10 p-2 lg:grid-cols-3 grid-col-1 md:grid-cols-2">
            <TeamCard
              name={"Arjun"}
              imgUrl={"img/nft2.png"}
              role={"designer & co-founder"}
              twitterUrl={"https://twitter.com/Sneaky_labs"}
              linkedinUrl={""}
            />
            <TeamCard
              name={"Sam"}
              imgUrl={"img/nft5.png"}
              role={"Developer & co-founder"}
              twitterUrl={"https://twitter.com/saadakb27044496"}
              linkedinUrl={""}
            />
            <TeamCard
              name={"Lukas"}
              imgUrl={"img/nft9.png"}
              role={"FrontEnd & Blockchain Developer"}
              twitterUrl={"https://twitter.com/zenosy1020"}
              linkedinUrl={"https://www.linkedin.com/in/zenosy/"}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Team;
