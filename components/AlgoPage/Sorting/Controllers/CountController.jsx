import React from "react";
import { Slider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { generateNewArray } from "/components/AlgoPage/Sorting/Utils/generateArray";

let tailwindConfiger = require("/tailwind.config.js");
let tailwindColors = tailwindConfiger.theme.colors;

const CountTheme = createTheme({
  palette: {
    CountPrimary: {
      main: tailwindColors["cyan"],
    },
    CountSecondary: {
      main: tailwindColors["cyan-bg"],
    },
  },
});

const CountController = () => {
  const updateBarWidth = (width) => {
    generateNewArray(width);
  };

  return (
    <div className="w-full h-full px-[2rem] bg-cyan-bg flex gap-[1.5rem] justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-cyan text-lg hover:cursor-pointer select-none">
      Count
      <ThemeProvider theme={CountTheme}>
        <Slider
          className="Slider"
          aria-label="Array Count Slider"
          defaultValue={20}
          min={0}
          max={25}
          color="CountPrimary"
          onChangeCommitted={(e, val) => {
            updateBarWidth(val);
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default CountController;
