import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { setDisc } from "/redux/reducers/hanoiSlice";
import { generateDiscs } from "/components/AlgoPage/TowerOfHanoi/HanoiUtils/generateDiscs";

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

  const disc = useSelector((state) => state.hanoi.disc);
  const maxDisc = useSelector((state) => state.hanoi.maxDisc);

  const updateDiscCount = (disc) => {
    dispatch(setDisc(disc));
    generateDiscs();
  };

  return (
    <div className="hidden w-[100%] h-full px-[2rem] bg-cyan-bg lg:flex gap-[1.5rem] justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-cyan text-lg hover:cursor-pointer select-none">
      Count
      <ThemeProvider theme={CountTheme}>
        <Slider
          className="Slider"
          aria-label="Array Count Slider"
          defaultValue={disc}
          min={1}
          max={maxDisc}
          color="CountPrimary"
          onChangeCommitted={(e, val) => {
            updateDiscCount(val);
          }}
        />
      </ThemeProvider>
    </div>
  );
}
