import React from "react";
import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import generateGrid from "../MazeUtils/generateGrid";
import { setCellSize } from "/redux/reducers/mazeSlice";

let tailwindConfiger = require("/tailwind.config.js");
let tailwindColors = tailwindConfiger.theme.colors;

const SizeTheme = createTheme({
  palette: {
    SizePrimary: {
      main: tailwindColors["cyan"],
    },
    SizeSecondary: {
      main: tailwindColors["cyan-bg"],
    },
  },
});

const SizeController = () => {
  const dispatch = useDispatch();
  const maxCellSize = useSelector((state) => state.maze.maxCellSize);
  const minCellSize = useSelector((state) => state.maze.minCellSize);
  const cellSize = useSelector((state) => state.maze.cellSize);

  const updateCellSize = (Size) => {
    dispatch(setCellSize(Size));
    generateGrid();
  };

  return (
    <div className="hidden w-[100%] h-full px-[2rem] bg-cyan-bg lg:flex gap-[1.5rem] justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-cyan text-lg hover:cursor-pointer select-none">
      Size
      <ThemeProvider theme={SizeTheme}>
        <Slider
          className="Slider"
          aria-label="Array Size Slider"
          defaultValue={cellSize}
          min={minCellSize}
          max={maxCellSize}
          color="SizePrimary"
          onChangeCommitted={(e, val) => {
            updateCellSize(val);
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default SizeController;
