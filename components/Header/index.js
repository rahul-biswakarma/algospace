import React from "react";
import dateFormat from "dateformat";
import { useSelector } from "react-redux";

const Header = () => {
  const now = new Date();
  let algoName = useSelector((state) => state.page.algoName);
  return (
    <div className=" bg-bg-1 sticky top-0 border-b-[2px] border-border-1 max-h-[70px] z-10">
      <div className="h-full w-4 bg-bg-1 absolute t-0 l-0 ml-[-2px]"></div>
      <div className="px-[1.5rem] py-[1.1rem] flex items-center relative ">
        <div className="font-space text-sm text-green">
          {dateFormat(now, "mm/dd")}
        </div>
        <div className="w-[16px] h-[32px] bg-cyan ml-[1.5rem]"></div>
        <div className="text-text-1 font-space uppercase text-[1.3rem] ml-[10px] flex items-center">
          {algoName}
        </div>
        <div className="bg-green w-2 absolute right-0 h-full"></div>
      </div>
    </div>
  );
};

export default Header;
