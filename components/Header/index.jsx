import { useEffect } from "react";
import dateFormat from "dateformat";
import { store } from "/redux/store.js";
import { useSelector, useDispatch } from "react-redux";

import { setSideNavOpen } from "/redux/reducers/pageSlice";

export default function Header() {
  const now = new Date();
  const dispatch = useDispatch();
  let algoName = useSelector((state) => state.page.algoName);

  useEffect(() => {
    dispatch(setSideNavOpen(false));
    document.getElementById("side-nav").style.left = "-100%";
  }, []);

  function toggleSideNav() {
    if (store.getState().page.sideNavOpen) {
      document.getElementById("side-nav").style.left = "-100%";
      store.dispatch(setSideNavOpen(false));
    } else {
      document.getElementById("side-nav").style.left = "0";
      store.dispatch(setSideNavOpen(true));
    }
  }

  return (
    <div className="bg-bg-1 sticky top-0 border-b-[2px] border-border-1 max-h-[70px] z-10 flex justify-between ease-in duration-100">
      <div className="left-side relative">
        <div className="h-full w-4 bg-bg-1 absolute t-0 l-0 ml-[-2px]"></div>
        <div className="px-[1.5rem] py-[1.1rem] flex items-center relative ">
          <div className="font-space text-sm text-green">
            {dateFormat(now, "mm/dd")}
          </div>
          <div className="w-[16px] h-[38px] bg-cyan ml-[1.5rem]"></div>
          <div className="text-text-1 font-space uppercase ml-[10px] flex items-center leading-[105%] text-[1.3rem]">
            {algoName}
          </div>
        </div>
      </div>
      <div className="relative max-h-[70px] flex items-center right-side px-gap gap-[1rem]">
        <a
          href="https://github.com/rahul-biswakarma/algospace"
          rel="noreferrer"
          target="_blank"
          title="Github Logo | Link to Github Repo"
          className="w-[28px] h-[28px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 38 38"
          >
            <g clipPath="url(#a)">
              <path
                fill="#aaa"
                d="M25.713 34.833a1.583 1.583 0 0 1-1.583-1.583v-4.117a3.404 3.404 0 0 0-.855-2.628 1.583 1.583 0 0 1 .966-2.644c3.863-.46 7.426-1.694 7.426-8.392a6.334 6.334 0 0 0-1.061-3.515 4.354 4.354 0 0 1-.65-3.261 5.875 5.875 0 0 0 0-2.233c-1.185.4-2.301.983-3.308 1.726a1.584 1.584 0 0 1-1.33.237 16.07 16.07 0 0 0-8.74 0 1.583 1.583 0 0 1-1.33-.237 11.717 11.717 0 0 0-3.341-1.726 5.576 5.576 0 0 0 0 2.233 4.496 4.496 0 0 1-.681 3.293 6.444 6.444 0 0 0-1.061 3.53c0 6.16 2.977 7.807 7.442 8.376a1.584 1.584 0 0 1 1.298 1.046 1.584 1.584 0 0 1-.332 1.583 3.26 3.26 0 0 0-.871 2.47v4.259a1.583 1.583 0 1 1-3.167 0v-.903a9.499 9.499 0 0 1-8.344-3.309 6.175 6.175 0 0 0-1.837-1.393 1.585 1.585 0 1 1 .792-3.072 7.805 7.805 0 0 1 3.166 2.154c1.584 1.583 3.167 2.976 6.176 2.406a6.16 6.16 0 0 1 .364-2.501c-3.262-.824-7.917-3.167-7.917-11.084a9.5 9.5 0 0 1 1.583-5.272c.193-.289.267-.64.206-.982a9.01 9.01 0 0 1 .523-5.082 1.583 1.583 0 0 1 .997-.903c.539-.158 2.47-.475 6.128 1.9a19.253 19.253 0 0 1 9.009 0c3.657-2.375 5.589-2.074 6.111-1.9a1.583 1.583 0 0 1 .998.903 9.041 9.041 0 0 1 .523 5.098 1.188 1.188 0 0 0 .174.902 9.5 9.5 0 0 1 1.583 5.289c0 8.027-4.623 10.355-7.917 11.083.29.85.409 1.749.349 2.644v4.022a1.583 1.583 0 0 1-1.489 1.583Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h38v38H0z" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <span
          className="w-[28px] md:hidden hover:cursor-pointer"
          onClick={toggleSideNav}
        >
          {!useSelector((state) => state.page.sideNavOpen) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 38 24"
            >
              <path
                fill="#aaa"
                d="M37.333 10.333H.667v3.334h36.666v-3.334ZM37.333.333H.667v3.334h36.666V.333ZM37.333 20.333H.667v3.334h36.666v-3.334Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
            >
              <path
                fill="#aaa"
                d="M26.785.858.858 26.785l2.357 2.357L29.142 3.215 26.785.858Z"
              />
              <path
                fill="#aaa"
                d="M29.476 26.452 3.548.525 1.191 2.882 27.12 28.809l2.357-2.357Z"
              />
            </svg>
          )}
        </span>
      </div>
      <div className="w-[10px] h-full absolute left-[-5px] top-[1.1px] bg-bg-1 border-b-[2px] border-bg-1"></div>
    </div>
  );
}
