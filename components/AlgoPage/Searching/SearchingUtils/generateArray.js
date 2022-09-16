import { store } from "/redux/store";
import { setArray, setTarget } from "/redux/reducers/searchingSlice";

export const generateNewArray = () => {
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

  store.dispatch(setArray(array));
  store.dispatch(setTarget(array[randomIndex]));
};
