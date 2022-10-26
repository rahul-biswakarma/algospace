import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import movePlayer from "../MazeUtils/movePlayer";

const Player = () => {
  const playerWidth = useSelector((state) => state.maze.playerWidth);
  const playerHeight = useSelector((state) => state.maze.playerHeight);
  const playerWidthOffset = useSelector(
    (state) => state.maze.playerWidthOffset
  );
  const playerHeightOffset = useSelector(
    (state) => state.maze.playerHeightOffset
  );
  const isGenerated = useSelector((state) => state.maze.isGenerated);

  useEffect(() => {
    document.onkeydown = movePlayer;
  }, []);

  return (
    <div
      id="player"
      className="absolute top-0 border-blue bg-blue-bg border-[3px]"
      style={{
        width: `${playerWidth - playerWidthOffset}px`,
        height: `${playerHeight - playerHeightOffset}px`,
        opacity: isGenerated === true ? "1" : "0",
        left: 3 + "px",
        top: 8 + "px",
      }}
    ></div>
  );
};

export default Player;
