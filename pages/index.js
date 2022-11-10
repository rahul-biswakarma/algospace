import Seo from "/components/Seo";
import { useEffect } from "react";
import { useRouter } from "next/router";

import TopBar from "/components/TopBar";
import Terrain from "/components/Terrain";
import { batch, useDispatch } from "react-redux";
import {
  setAlgoId,
  setAlgoName,
  setAlgoCategory,
} from "/redux/reducers/pageSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(setAlgoId("home"));
      dispatch(setAlgoName("Home"));
      dispatch(setAlgoCategory("home"));
    });
  });
  return (
    <div>
      <Seo category="home" id={router.query.algoid} />
      <div className="p-gap">
        <div className="relative w-[100%] h-[70vh] border-[1px] border-border-1 overflow-hidden">
          {/* <div className="absolute bottom-0 uppercase font-space text-[13rem] text-[#111] text-center leading-[10rem] tracking-tighter w-[100%] z-10">
            Algospace
          </div> */}
          <TopBar />
          <div
            id="visualizer-container"
            className="relative h-full overflow-hidden"
          >
            <Terrain className="z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
