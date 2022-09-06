import * as Colors from "/components/AlgoPage/Sorting/SortingUtils/colors.js";

import { MakeDelay } from "/utils";

export const SwapElementsColors = (i, j) => {
  let arrayBars = document.querySelectorAll(".array-bar");
  if (Array.length != 0) {
    arrayBars[i].style.background = Colors.SWAP_BG_COLOR;
    arrayBars[i].style.borderColor = Colors.SWAP_BORDER_COLOR;
    arrayBars[j].style.background = Colors.SWAP_BG_COLOR;
    arrayBars[j].style.borderColor = Colors.SWAP_BORDER_COLOR;
  }
};

export const DefaultElementsColors = (i, j) => {
  let arrayBars = document.querySelectorAll(".array-bar");
  if (arrayBars.length != 0) {
    arrayBars[i].style.background = Colors.DEFAULT_BG_COLOR;
    arrayBars[i].style.borderColor = Colors.DEFAULT_BORDER_COLOR;
    arrayBars[j].style.background = Colors.DEFAULT_BG_COLOR;
    arrayBars[j].style.borderColor = Colors.DEFAULT_BORDER_COLOR;
  }
};

export const ComparingElementsColors = async (i, j) => {
  let arrayBars = document.querySelectorAll(".array-bar");
  if (arrayBars.length != 0) {
    arrayBars[i].style.background = Colors.SELECTED_BG_COLOR;
    arrayBars[i].style.borderColor = Colors.SELECTED_BORDER_COLOR;
    arrayBars[j].style.background = Colors.SELECTED_BG_COLOR;
    arrayBars[j].style.borderColor = Colors.SELECTED_BORDER_COLOR;
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
  });
};
