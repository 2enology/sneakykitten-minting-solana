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
    <div className="rounded-2xl border-black border-[2px] border-b-[8px] flex flex-col items-center md:p-[70px] p-[30px] gap-5 text-center bg-white">
      <img
        src={props.imgUrl}
        className="object-cover w-full border-b-4 border-black rounded-2xl"
        alt=""
      />
      <p className="uppercase text-[36px] font-bold font-gulf text-[black] font-Gulfs">
        {props.name}
      </p>
      <p className="text-lg font-bold text-gray-700 uppercase">{props.role}</p>
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
