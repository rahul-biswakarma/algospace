import { Link } from "next/link";
import dateFormat from "dateformat";
import { useSelector } from "react-redux";

export default function Header() {
  const now = new Date();
  let algoName = useSelector((state) => state.page.algoName);
  return (
    <div className="bg-bg-1 sticky top-0 border-b-[2px] border-border-1 max-h-[70px] z-10 flex justify-between">
      <div className="left-side relative">
        <div className="h-full w-4 bg-bg-1 absolute t-0 l-0 ml-[-2px]"></div>
        <div className="px-[1.5rem] py-[1.1rem] flex items-center relative ">
          <div className="font-space text-sm text-green">
            {dateFormat(now, "mm/dd")}
          </div>
          <div className="w-[16px] h-[32px] bg-cyan ml-[1.5rem]"></div>
          <div className="text-text-1 font-space uppercase text-[1.3rem] ml-[10px] flex items-center">
            {algoName}
          </div>
        </div>
      </div>
      <div className="relative max-h-[70px] flex items-center right-side px-gap">
        <a
          href="https://github.com/rahul-biswakarma/algospace"
          target="_blank"
          title="Github Logo | Link to Github Repo"
        >
          <svg width="24" height="24" fill="#fff" viewBox="3 3 18 18">
            <path d="M12 3c-4.973 0-9 4.13-9 9.228 0 4.083 2.576 7.532 6.154 8.754.45.081.618-.196.618-.438 0-.22-.01-.946-.01-1.719-2.262.427-2.847-.565-3.027-1.084-.101-.265-.54-1.084-.923-1.303-.315-.173-.764-.6-.01-.612.708-.011 1.214.67 1.383.946.81 1.396 2.104 1.004 2.621.762.079-.6.315-1.004.574-1.235-2.003-.23-4.095-1.026-4.095-4.556 0-1.003.349-1.834.922-2.48-.09-.23-.404-1.176.09-2.445 0 0 .754-.242 2.475.946a8.159 8.159 0 0 1 2.25-.312c.765 0 1.53.104 2.25.312 1.722-1.2 2.475-.946 2.475-.946.495 1.269.18 2.215.09 2.445.574.646.923 1.465.923 2.48 0 3.541-2.104 4.326-4.106 4.556.326.289.607.842.607 1.707 0 1.235-.011 2.227-.011 2.538 0 .242.169.53.619.438a9.036 9.036 0 0 0 4.439-3.366A9.402 9.402 0 0 0 21 12.228C21 7.129 16.973 3 12 3Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
