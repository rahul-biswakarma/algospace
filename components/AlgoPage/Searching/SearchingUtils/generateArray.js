import { store } from "/redux/store";
import {
  setArray,
  setTarget,
  setCompElement,
} from "/redux/reducers/searchingSlice";

export const generateNewArray = () => {
  store.dispatch(setCompElement(-1));
  const visualizerContainer = document.getElementById("visualizer-container");

  const visualArrayElementGap = store.getState().searching.barWidth;
  const visualArrayElementWidth = store.getState().searching.barWidth;

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

  let randomIndex = Math.floor(Math.random() * (array.length - 1));

  let algoName = store.getState().page.algoId;

  if (algoName == "binary-search" || algoName == "jump-search") {
    array.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }
  store.dispatch(setArray(array));
  store.dispatch(setTarget(array[randomIndex]));
};
