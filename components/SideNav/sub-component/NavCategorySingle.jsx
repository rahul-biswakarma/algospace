import React from "react";
import Link from "next/link";
import NavData from "/public/data/Nav.json";

const NavCategorySingle = () => {
  var algorithms = NavData.singleAlgorithms;

  return (
    <>
      {algorithms.map((algorithm) => {
        return (
          <div
            key={algorithm.id}
            className="flex flex-col px-4 py-[10px] w-full bg-bg-2 border-2 border-border-1 hover:cursor-pointer"
          >
            <Link href={"/" + algorithm.id}>
              <h2 className="font-space uppercase text-green text-center text-[1.1rem] hover:cursor-pointer">
                {algorithm.name}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default NavCategorySingle;
