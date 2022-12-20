import { store } from "/redux/store";
import { setArray, setStatus } from "/redux/reducers/sortingSlice";

export const generateNewArray = () => {
  const visualizerContainer = document.getElementById("visualizer-container");

  // const visualArrayElementGap = store.getState().sorting.barWidth;
  const visualArrayElementGap = 0;
  const visualArrayElementWidth = store.getState().sorting.barWidth;

  let height = visualizerContainer.clientHeight;
  let width = visualizerContainer.clientWidth - 10;

  // visualizerContainer.style.gap = visualArrayElementGap + "px";

  let maxHeight = Math.floor((height * 80) / 100);
  let arrayCount = Math.floor(
    width / (visualArrayElementWidth + visualArrayElementGap)
  );

  const array = [];

  for (let i = 0; i < arrayCount; i++) {
    // var randomHeight = Math.floor(Math.random() * maxHeight + 10);
    let arrayHeight = Math.floor(
      maxHeight - ((i + 1) * maxHeight) / arrayCount
    );
    if (arrayHeight) array.push(arrayHeight);
  }

  let shuffledArray = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  store.dispatch(setArray(shuffledArray));
  store.dispatch(setStatus("unsorted"));
};
