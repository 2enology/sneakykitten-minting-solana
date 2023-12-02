import Collapse from "./Collapse";

const Faq = () => {
  return (
    <div
      className="w-full flex justify-center p-[5px] max-w-[1040px] flex-col pt-[50px]"
      id="faq"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-between gap-10 mx-10 my-10 lg:flex-row">
          <div className="relative">
            <p className="uppercase text-[40px] md:text-[80px] font-bold font-Gulfs text-[black]">
              Faq
            </p>
            <p className="uppercase text-xl -rotate-[20deg] font-bold font-Gulfs text-[#F8450B] absolute top-0 left-0">
              our
            </p>
          </div>
        </div>
        <Collapse />
      </div>
    </div>
  );
};

export default Faq;
