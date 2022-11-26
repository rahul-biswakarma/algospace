import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { setBarWidth } from "/redux/reducers/searchingSlice";
import { generateNewArray } from "/components/AlgoPage/Searching/SearchingUtils/generateArray";

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

export default function CountController() {
  const dispatch = useDispatch();
  const maxBarWidth = useSelector((state) => state.searching.maxBarWidth);
  const barWidth = useSelector((state) => state.searching.barWidth);

  const updateBarWidth = (width) => {
    dispatch(setBarWidth(maxBarWidth - width));
    generateNewArray();
  };

  return (
    <div className="hidden w-[100%] h-full px-[2rem] bg-cyan-bg lg:flex gap-[1.5rem] justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-cyan text-lg hover:cursor-pointer select-none">
      Count
      <ThemeProvider theme={CountTheme}>
        <Slider
          className="Slider"
          aria-label="Array Count Slider"
          defaultValue={maxBarWidth - barWidth}
          min={5}
          max={maxBarWidth - 5}
          color="CountPrimary"
          onChangeCommitted={(e, val) => {
            updateBarWidth(val);
          }}
        />
      </ThemeProvider>
    </div>
  );
}
