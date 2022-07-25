import { setRecoil } from "recoil-nexus";
import { arrayAtom } from "/recoil/atoms/arrayAtom";
import { sortingBarWidthAtom } from "/recoil/atoms/sortingBarWidthAtom";

export const generateNewArray = (barWidth) => {
  const visualizerContainer = document.getElementById("visualizer-container");

  const visualArrayElementGap = 30 - barWidth;
  const visualArrayElementWidth = 30 - barWidth;

  let height = visualizerContainer.clientHeight;
  let width = visualizerContainer.offsetWidth - 100;

  visualizerContainer.style.gap = visualArrayElementGap + "px";

  let maxHeight = Math.floor((height * 80) / 100);
  let arrayCount = Math.floor(
    width / (visualArrayElementWidth + visualArrayElementGap)
  );

  const array = [];

  for (let i = 0; i < arrayCount; i++) {
    let randomHeight = Math.floor(Math.random() * maxHeight + 10);
    array.push(randomHeight);
  }

  setRecoil(sortingBarWidthAtom, visualArrayElementWidth);
  setRecoil(arrayAtom, array);
};
