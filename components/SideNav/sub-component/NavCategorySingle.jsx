import React from "react";
import Link from "next/link";
import { Nav } from "rsuite";
import NavData from "/public/data/Nav.json";
import { UPDATE_NAV_EVENT_COUNT } from "/actions";
import { useSelector, useDispatch } from "react-redux";

const NavCategorySingle = () => {
  var algorithms = NavData.singleAlgorithms;
  const dispatch = useDispatch();

  return (
    <>
      {algorithms.map((algorithm) => {
        let navEventCount = useSelector((state) => state.navEventCount);
        navEventCount = navEventCount + 1;
        dispatch(UPDATE_NAV_EVENT_COUNT(navEventCount));
        return (
          <div
            key={algorithm.id}
            className="flex flex-col px-4 py-[10px] w-full bg-bg-2 border-2 border-border-1 hover:cursor-pointer"
          >
            <Nav.Item eventKey={navEventCount}>
              <Link href={"/" + algorithm.id}>
                <h2 className="font-space uppercase text-green text-center text-[1.1rem] hover:cursor-pointer">
                  {algorithm.name}
                </h2>
              </Link>
            </Nav.Item>
          </div>
        );
      })}
    </>
  );
};

export default NavCategorySingle;
