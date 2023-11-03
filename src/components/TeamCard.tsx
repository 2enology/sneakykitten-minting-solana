/* eslint-disable @next/next/no-img-element */
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // For LinkedIn icon

const TeamCard = (props: {
  name: string;
  imgUrl: string;
  role: string;
  twitterUrl: string;
  linkedinUrl: string;
}) => {
  return (
    <div className="rounded-2xl border-black border-[2px] border-b-[8px] flex flex-col items-center md:p-[80px] p-[30px] gap-5">
      <img
        src={props.imgUrl}
        className="rounded-full w-full h-full object-cover max-h-[250px]"
        alt=""
      />
      <p className="uppercase text-[36px] font-bold font-gulf text-[black]">
        {props.name}
      </p>
      <p className="uppercase text-[12px] font-bold text-[#535353]">
        {props.role}
      </p>
      <div className="flex justify-center gap-5">
        <a
          href={props.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[80px] h-[80px] rounded-full flex justify-center items-center text-shadow3 border-[1px] border-black cursor-pointer"
        >
          <FaTwitter size={30} />
        </a>
        {props.linkedinUrl !== "" && (
          <a
            href={props.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[80px] h-[80px] rounded-full flex justify-center items-center text-shadow3 border-[1px] border-black cursor-pointer"
          >
            <FaLinkedin size={30} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
