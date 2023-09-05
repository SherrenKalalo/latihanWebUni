import React from "react";
import IconArrowNext from "../../assets/icon-arrow-next.png";
import IconPapan from "../../assets/icon-n2.svg";
import IconTeropong from "../../assets/icon-n5.svg";

const Packages = () => {
  return (
    <div className="w-full bg-white py-8 px-8 font-montserrat">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2">
        <div className="my-16 md:mx-8 xl:mx-28">
          <div className="border border-[#E74040] border-t-4 md:w-20 sm:w-16 w-12" />
          <h1 className="font-bold md:text-3xl sm:text-2xl text-xl my-8">
            Approdable Packages
          </h1>
          <p className="text-[#737373] md:text-sm sm:text-sm text-xs">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>

          <h6 className="text-[#96BB7C] md:text-sm sm:text-sm pr-3 text-xs my-8 inline-block font-bold">
            Learn More
          </h6>
          <img src={IconArrowNext} alt="/" className="inline-block pl-2" />
        </div>
        <div className="flex flex-row md:flex-row py-4 m-4 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
            <div className="xl:w-[239px] h-[292px] md:w-[180px] shadow-xl rounded-sm">
              <img
                src={IconPapan}
                alt="/"
                className="w-[70px] h-[76px]  m-8 p-4 bg-[#96BB7C] rounded-md"
              />
              <h1 className="text-[16px] mx-8 font-bold">Certified Teacher</h1>
              <div className="my-4 border border-[#E74040] border-t-[2px] md:w-16 sm:w-12 w-12 mx-8" />
              <p className="mx-8 text-xs text-gray-500">
                The gradual accumulation of information about
              </p>
            </div>
            <div className="xl:w-[239px] h-[292px] md:w-[180px] shadow-xl rounded-sm">
              <img
                src={IconTeropong}
                alt="/"
                className="w-[70px] h-[76px]  m-8 p-4 bg-[#96BB7C] rounded-md"
              />
              <h1 className="text-[16px] mx-8 font-bold">Expert instruction</h1>
              <div className="my-4 border border-[#E74040] border-t-[2px] md:w-16 sm:w-12 w-12 mx-8" />
              <p className="mx-8 text-xs text-gray-500">
                The gradual accumulation of information about
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Packages;
