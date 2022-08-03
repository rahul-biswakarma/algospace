import { getRecoil, setRecoil } from "recoil-nexus";
import { arrayAtom } from "/recoil/atoms/arrayAtom";
import { sortingBarWidthAtom } from "/recoil/atoms/sortingBarWidthAtom";
import { ArrayDataUpdater } from "/components/AlgoPage/Sorting/Utils";

export const generateNewArray = () => {
  document.getElementById("sorting-status").innerHTML = "Unsorted";
  const barWidth = getRecoil(sortingBarWidthAtom);
  const visualizerContainer = document.getElementById("visualizer-container");

  const visualArrayElementGap = barWidth;
  const visualArrayElementWidth = barWidth;

  let height = visualizerContainer.clientHeight;
  let width = visualizerContainer.clientWidth - 100;

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

  ArrayDataUpdater(array);
  setRecoil(arrayAtom, array);
};
