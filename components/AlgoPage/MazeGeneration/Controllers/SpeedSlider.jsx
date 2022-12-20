import React from "react";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { setSpeed } from "/redux/reducers/mazeSlice";

let tailwindConfiger = require("/tailwind.config.js");
let tailwindColors = tailwindConfiger.theme.colors;

const SpeedTheme = createTheme({
  palette: {
    SpeedPrimary: {
      main: tailwindColors["purple"],
    },
    SpeedSecondary: {
      main: tailwindColors["purple-bg"],
    },
  },
});

const SpeedController = () => {
  const dispatch = useDispatch();
  const maxSpeed = useSelector((state) => state.maze.maxSpeed);
  const speed = useSelector((state) => state.maze.speed);

  const updateAlgoSpeed = (speed) => {
    dispatch(setSpeed(maxSpeed - speed));
  };

  return (
    <div className="hidden w-[100%] h-full px-[2rem] bg-purple-bg lg:flex gap-[1.5rem] justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-purple text-lg hover:cursor-pointer select-none">
      Speed
      <ThemeProvider theme={SpeedTheme}>
        <Slider
          className="Slider"
          aria-label="Soritng Speed Slider"
          defaultValue={maxSpeed-speed}
          min={0}
          max={maxSpeed}
          color="SpeedPrimary"
          onChangeCommitted={(e, val) => {
            updateAlgoSpeed(val);
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default SpeedController;
