import { store } from "/redux/store";
import { setArray, setStatus } from "/redux/reducers/sortingSlice";

export const generateNewArray = () => {
  const visualizerContainer = document.getElementById("visualizer-container");

  const visualArrayElementGap = store.getState().sorting.barWidth;
  const visualArrayElementWidth = store.getState().sorting.barWidth;

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

  store.dispatch(setArray(array));
  store.dispatch(setStatus("unsorted"));
};
