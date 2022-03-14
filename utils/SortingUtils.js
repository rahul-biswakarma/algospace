const SWAP_COLOR_BORDER = "var(--pink)";
const SELECTED_COLOR_BORDER = "var(--orange)";
const FINAL_POS_COLOR_BORDER = "var(--green)";
const DEFAULT_COLOR_BORDER = "var(--blue)";
const SWAP_COLOR = "var(--bg-pink-2)";
const SELECTED_COLOR = "var(--bg-orange-2)";
const FINAL_POS_COLOR = "var(--bg-green-2)";
const DEFAULT_COLOR = "var(--bg-blue-2)";

const GenerateArray = (elementWidth) => {
  let sortingArrayContainer = document.getElementById("sorting-array-c");
  sortingArrayContainer.innerHTML = "";

  const visualArrayElementGap = 40 - elementWidth;
  const visualArrayElementWidth = 40 - elementWidth;

  sortingArrayContainer.style.gap = visualArrayElementGap + "px";

  let height = sortingArrayContainer.clientHeight;
  let width = sortingArrayContainer.offsetWidth - 100;

  let maxHeight = Math.floor((height * 90) / 100);

  let arrayCount = Math.floor(
    width / (visualArrayElementWidth + visualArrayElementGap)
  );

  for (let i = 0; i < arrayCount; i++) {
    let sortingArrayElement = document.createElement("div");
    let randomHeight = Math.floor(Math.random() * maxHeight + 5); // Generating random Array values for sorting

    sortingArrayElement.style.height = randomHeight + "px";
    sortingArrayElement.style.width = visualArrayElementWidth + "px";

    sortingArrayElement.setAttribute("data-index", i);

    sortingArrayElement.classList.add("SortingArrayElement");

    sortingArrayContainer.appendChild(sortingArrayElement);
  }
};

const CompareHeigth = (a, b) => {
  if (parseInt(a.style.height) > parseInt(b.style.height)) {
    return true;
  }
  return false;
};

const ChangePairElementColor = (a, b, c, d) => {
  a.style.background = c;
  b.style.background = c;
  a.style.borderColor = d;
  b.style.borderColor = d;
  return Promise.resolve("Success");
};

const ChangeSingleElementColor = (a, b, c) => {
  a.style.background = b;
  a.style.borderColor = c;
  return Promise.resolve("Success");
};

const MakeDelay = async (ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};

const Swap = (x, y) => {
  const temp = x.style.height;
  x.style.height = y.style.height;
  y.style.height = temp;
};

export {
  GenerateArray,
  CompareHeigth,
  ChangeSingleElementColor,
  ChangePairElementColor,
  MakeDelay,
  Swap,
  SELECTED_COLOR,
  SWAP_COLOR,
  DEFAULT_COLOR,
  FINAL_POS_COLOR,
  SELECTED_COLOR_BORDER,
  SWAP_COLOR_BORDER,
  DEFAULT_COLOR_BORDER,
  FINAL_POS_COLOR_BORDER,
};