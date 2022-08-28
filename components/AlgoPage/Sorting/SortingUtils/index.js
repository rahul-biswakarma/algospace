import { MakeDelay } from "/utils";
import * as Colors from "/components/AlgoPage/Sorting/SortingUtils/colors.js";

export const IsHeightGreater = (elementOne, elementTwo) => {
  if (parseInt(elementOne.style.height) > parseInt(elementTwo.style.height)) {
    return true;
  }
  return false;
};

export const ChangePairElementColor = (
  elementOne,
  elementTwo,
  backgroundColor,
  borderColor
) => {
  elementOne.style.background = backgroundColor;
  elementTwo.style.background = backgroundColor;
  elementOne.style.borderColor = borderColor;
  elementTwo.style.borderColor = borderColor;
  return Promise.resolve("Success");
};

export const ChangeSingleElementColor = (
  element,
  backgroundColor,
  borderColor
) => {
  element.style.background = backgroundColor;
  element.style.borderColor = borderColor;
  return Promise.resolve("Success");
};

export const Swap = (elementOne, elementTwo) => {
  const temp = elementOne.style.height;
  elementOne.style.height = elementTwo.style.height;
  elementTwo.style.height = temp;
};

export const VerifyArray = async (arrayBars, delay) => {
  let arrLength = arrayBars.length;
  await MakeDelay(delay);
  for (let i = 0; i < arrLength; i++) {
    ChangeSingleElementColor(
      arrayBars[i],
      Colors.RED_BG_COLOR,
      Colors.RED_BORDER_COLOR
    );
    await MakeDelay(delay);
    ChangeSingleElementColor(
      arrayBars[i],
      Colors.FINAL_BG_COLOR,
      Colors.FINAL_BORDER_COLOR
    );
    await MakeDelay(delay);
  }
};

export const ArrayDataUpdater = async (arr) => {
  var ArraySpan = document.getElementById("sorting-array-data");
  ArraySpan.innerHTML = "";
  await new Promise(() => {
    for (let i = 0; i < arr.length; i++) {
      ArraySpan.innerHTML +=
        "<span class='noselect array-data' id='sortingStatsArray" +
        i +
        "'>" +
        arr[i] +
        "</span>";
    }

    // document.getElementById("array-element-count").innerHTML = arr.length;
    // document.getElementById("array-element-count-swap").innerHTML = arr.length;
    // document.getElementById("array-element-count-comp").innerHTML = arr.length;
    // document.getElementById("swaps-count").innerHTML = swaps;
    // document.getElementById("comparisons-count").innerHTML = comparisons;

    // document.getElementById("swap-percent").innerHTML = Math.round(
    //   (swaps / arr.length) * 100
    // );
    // document.getElementById("comparison-percent").innerHTML = Math.round(
    //   (comparisons / arr.length) * 100
    // );
  });
};
