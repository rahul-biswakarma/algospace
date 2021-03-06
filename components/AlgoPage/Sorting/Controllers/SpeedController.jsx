import React from "react";
import { useRecoilState } from "recoil";
import Slider from "@mui/material/Slider";
import { algoSpeedAtom } from "/recoil/atoms/algoSpeedAtom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const [, setAlgoSpeed] = useRecoilState(algoSpeedAtom);
  const updateAlgoSpeed = (speed) => {
    setAlgoSpeed(500 - speed);
  };

  return (
    <div className="w-full h-full px-[2rem] bg-purple-bg flex gap-[1.5rem] justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-purple text-lg hover:cursor-pointer select-none">
      Speed
      <ThemeProvider theme={SpeedTheme}>
        <Slider
          className="Slider"
          aria-label="Soritng Speed Slider"
          defaultValue={150}
          min={0}
          max={500}
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
