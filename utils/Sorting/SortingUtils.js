import { ArrayHTMLUpdater } from "./SortingTerminal";

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
  var sortingTerminal = document.getElementById("sortingTerminal");
  sortingTerminal.innerHTML += "";
  sortingArrayContainer.innerHTML = "";
  var arr = [];
  const visualArrayElementGap = 40 - elementWidth;
  const visualArrayElementWidth = 40 - elementWidth;
  sortingArrayContainer.style.gap = visualArrayElementGap + "px";
  let height = sortingArrayContainer.clientHeight;
  let width = sortingArrayContainer.offsetWidth - 100;
  let maxHeight = Math.floor((height * 80) / 100);
  let arrayCount = Math.floor(
    width / (visualArrayElementWidth + visualArrayElementGap)
  );
  for (let i = 0; i < arrayCount; i++) {
    let sortingArrayElement = document.createElement("div");
    let randomHeight = Math.floor(Math.random() * maxHeight + 20); // Generating random Array values for sorting
    arr.push(randomHeight);
    sortingArrayElement.style.height = randomHeight + "px";
    sortingArrayElement.style.width = visualArrayElementWidth + "px";
    sortingArrayElement.classList.add("SortingArrayElement");
    sortingArrayContainer.appendChild(sortingArrayElement);
  }
  ArrayHTMLUpdater(arr);
};

const UpdateStatsArray = async (i, j, iValue, jValue) => {
  var iArr = "sortingStatsArray" + i;
  var jArr = "sortingStatsArray" + j;
  document.getElementById(iArr).innerHTML = iValue;
  document.getElementById(jArr).innerHTML = jValue;
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

  try {
    var iArr = "sortingStatsArray" + i;
    var jArr = "sortingStatsArray" + j;
    document.getElementById(iArr).innerHTML = iValue;
    document.getElementById(jArr).innerHTML = jValue;
  } catch {}
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
  UpdateStatsArray,
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
