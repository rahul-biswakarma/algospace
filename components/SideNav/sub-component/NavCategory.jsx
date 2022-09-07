import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import NavData from "/public/data/Nav.json";

const NavCategory = () => {
  var algorithms = NavData.algorithms;
  let currAlgoId = useSelector((state) => state.page.algoId);
  return (
    <>
      {algorithms.map((data) => {
        return (
          <div
            key={data.id + data.algorithms[0].id}
            className="nav-category-container flex-col px-4 py-[18px] w-full bg-bg-2 border-2 border-border-1 cursor-pointer"
          >
            <h2 className="font-space uppercase text-green text-center text-[1.1rem] cursor-pointer mb-[5px]">
              {data.name}
            </h2>
            <div className="nav-category-links flex flex-col">
              {data.algorithms.map((algorithm) => {
                return (
                  <Link
                    key={algorithm.id}
                    href={"/" + data.id + "/" + algorithm.id}
                  >
                    {currAlgoId != algorithm.id ? (
                      <a className="w-full border-2 border-bg-2 hover:border-green hover:border-2 hover:bg-green-bg font-space text-text-1 text-center text-[0.95rem] ">
                        {algorithm.name}
                      </a>
                    ) : (
                      <a className="w-full border-2 border-bg-2 bg-green-bg-4 hover:border-green font-space text-text-1 text-center text-[0.95rem] ">
                        {algorithm.name}
                      </a>
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
};

export default NavCategory;
