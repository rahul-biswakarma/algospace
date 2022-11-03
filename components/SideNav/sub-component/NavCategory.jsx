import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import NavData from "/public/data/Nav.json";

export default function NavCategory() {
  var algorithms = NavData.algorithms;
  let currAlgoId = useSelector((state) => state.page.algoId);
  let currAlgoCatgeory = useSelector((state) => state.page.algoCategory);
  return (
    <>
      {algorithms.map((data) => {
        return (
          <div
            key={data.id + data.algorithms[0].id}
            className="nav-category-container flex-col px-4 py-[15px] w-full bg-bg-2 border-2 border-border-1 cursor-pointer"
          >
            <h2 className="font-space uppercase text-green text-center text-[1.1rem] cursor-pointer mb-[5px]">
              {data.name}
            </h2>
            <div
              className={
                data.id != currAlgoCatgeory
                  ? "nav-category-links flex flex-col h-0 invisible hover:h-full"
                  : "nav-category-links flex flex-col"
              }
            >
              {data.algorithms.map((algorithm) => {
                return (
                  <Link
                    key={algorithm.id}
                    href={"/" + data.id + "/" + algorithm.id}
                  >
                    {currAlgoId != algorithm.id ? (
                      <div className="w-full border-2 border-bg-2 hover:border-green hover:border-2 hover:bg-green-bg font-space text-text-1 text-center text-[0.95rem] ">
                        {algorithm.name}
                      </div>
                    ) : (
                      <div className="w-full border-2 border-bg-2 bg-green-bg-4 hover:border-green font-space text-text-1 text-center text-[0.95rem] ">
                        {algorithm.name}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
