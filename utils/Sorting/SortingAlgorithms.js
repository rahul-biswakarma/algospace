import { SwapHTMLUpdater, ComparisonsHTMLUpdater } from "./SortingTerminal";

import {
  Swap,
  ChangeSingleElementColor,
  ChangePairElementColor,
  MakeDelay,
  CompareHeigth,
  UpdateStatsArray,
  SWAP_COLOR,
  SELECTED_COLOR,
  FINAL_POS_COLOR,
  DEFAULT_COLOR,
  SELECTED_COLOR_BORDER,
  SWAP_COLOR_BORDER,
  DEFAULT_COLOR_BORDER,
  FINAL_POS_COLOR_BORDER,
} from "./SortingUtils";

const BubbleSort = async (delay) => {
  var i, j;
  var arrLen;
  var arr = document.querySelectorAll(".SortingArrayElement");

  arrLen = arr.length;

  for (i = 0; i < arrLen - 1; i++) {
    for (j = 0; j < arrLen - i - 1; j++) {
      // Stop Function Helper
      if (
        document
          .getElementById("function-status")
          .getAttribute("data-func-status") === "0"
      )
        return;
      // Stop Function Helper
      ComparisonsHTMLUpdater();
      ChangePairElementColor(
        arr[j],
        arr[j + 1],
        SELECTED_COLOR,
        SELECTED_COLOR_BORDER
      );
      await MakeDelay(Math.floor(delay / 2));

      if (CompareHeigth(arr[j], arr[j + 1])) {
        ChangePairElementColor(
          arr[j],
          arr[j + 1],
          SWAP_COLOR,
          SWAP_COLOR_BORDER
        );

        Swap(arr[j], arr[j + 1]);
        SwapHTMLUpdater(i, j);
        await MakeDelay(Math.floor(delay / 2));
      }
      ChangeSingleElementColor(arr[j], DEFAULT_COLOR, DEFAULT_COLOR_BORDER);
      UpdateStatsArray(
        j,
        j + 1,
        parseInt(arr[j].style.height),
        parseInt(arr[j + 1].style.height)
      );
    }
    ChangeSingleElementColor(
      arr[arrLen - 1 - i],
      FINAL_POS_COLOR,
      FINAL_POS_COLOR_BORDER
    );
  }
  ChangeSingleElementColor(arr[0], FINAL_POS_COLOR, FINAL_POS_COLOR_BORDER);
};

const SelectionSort = async (delay) => {
  var i, j, arrLen;
  var minIndex = 0;
  var arr = document.querySelectorAll(".SortingArrayElement");

  arrLen = arr.length;

  for (i = 0; i < arrLen - 1; i++) {
    minIndex = i;

    for (j = i + 1; j < arrLen; j++) {
      // Stop Function Helper
      if (
        document
          .getElementById("function-status")
          .getAttribute("data-func-status") === "0"
      )
        return;
      // Stop Function Helper
      ComparisonsHTMLUpdater();
      ChangeSingleElementColor(arr[j], SELECTED_COLOR, SELECTED_COLOR_BORDER);

      await MakeDelay(Math.floor(delay / 2));

      if (CompareHeigth(arr[minIndex], arr[j])) {
        ChangeSingleElementColor(
          arr[minIndex],
          DEFAULT_COLOR,
          DEFAULT_COLOR_BORDER
        );
        minIndex = j;
      }
      ChangeSingleElementColor(arr[j], DEFAULT_COLOR, DEFAULT_COLOR_BORDER);
      UpdateStatsArray(
        j,
        minIndex,
        parseInt(arr[j].style.height),
        parseInt(arr[minIndex].style.height)
      );
      ChangeSingleElementColor(arr[minIndex], SWAP_COLOR, SWAP_COLOR_BORDER);
    }
    Swap(arr[i], arr[minIndex]);
    SwapHTMLUpdater(minIndex, j);
    ChangeSingleElementColor(arr[i], FINAL_POS_COLOR, FINAL_POS_COLOR_BORDER);

    await MakeDelay(Math.floor(delay / 2));
  }

  ChangeSingleElementColor(
    arr[arrLen - 1],
    FINAL_POS_COLOR,
    FINAL_POS_COLOR_BORDER
  );
};

const Merge = async (arr, left, mid, right, delay) => {
  var n1 = mid - left + 1;
  var n2 = right - mid;

  var LeftArray = new Array(n1);
  var RightArray = new Array(n2);

  for (var i = 0; i < n1; i++) {
    // Stop Function Helper
    if (
      document
        .getElementById("function-status")
        .getAttribute("data-func-status") === "0"
    )
      return;
    // Stop Function Helper
    LeftArray[i] = parseInt(arr[left + i].style.height);
    ChangeSingleElementColor(arr[left + i], SWAP_COLOR, SWAP_COLOR_BORDER);
    await MakeDelay(Math.floor(delay / 3));
  }

  for (var j = 0; j < n2; j++) {
    // Stop Function Helper
    if (
      document
        .getElementById("function-status")
        .getAttribute("data-func-status") === "0"
    )
      return;
    // Stop Function Helper
    RightArray[j] = parseInt(arr[mid + 1 + j].style.height);
    ChangeSingleElementColor(
      arr[mid + 1 + j],
      SELECTED_COLOR,
      SELECTED_COLOR_BORDER
    );
    await MakeDelay(Math.floor(delay / 3));
  }

  var i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    // Stop Function Helper
    if (
      document
        .getElementById("function-status")
        .getAttribute("data-func-status") === "0"
    )
      return;
    // Stop Function Helper
    SwapHTMLUpdater();
    if (LeftArray[i] <= RightArray[j]) {
      arr[k].style.height = LeftArray[i] + "px";
      i++;
    } else {
      arr[k].style.height = RightArray[j] + "px";
      j++;
    }

    ChangeSingleElementColor(arr[k], FINAL_POS_COLOR, FINAL_POS_COLOR_BORDER);
    await MakeDelay(Math.floor(delay / 6));
    k++;
  }

  while (i < n1) {
    arr[k].style.height = LeftArray[i] + "px";
    ChangeSingleElementColor(arr[k], FINAL_POS_COLOR, FINAL_POS_COLOR_BORDER);
    await MakeDelay(Math.floor(delay / 6));
    i++;
    k++;
  }

  while (j < n2) {
    arr[k].style.height = RightArray[j] + "px";
    ChangeSingleElementColor(arr[k], FINAL_POS_COLOR, FINAL_POS_COLOR_BORDER);
    await MakeDelay(Math.floor(delay / 6));
    j++;
    k++;
  }
};

const MergeSortMain = async (arr, left, right, delay) => {
  // Stop Function Helper
  if (
    document
      .getElementById("function-status")
      .getAttribute("data-func-status") === "0"
  )
    return;
  // Stop Function Helper
  if (left >= right) {
    return;
  }
  ComparisonsHTMLUpdater();
  var mid = left + parseInt((right - left) / 2);
  await MergeSortMain(arr, left, mid, delay);
  await MakeDelay(Math.floor(delay / 6));

  await MergeSortMain(arr, mid + 1, right, delay);
  await MakeDelay(Math.floor(delay / 6));

  await Merge(arr, left, mid, right, delay);
  await MakeDelay(Math.floor(delay / 6));
};

const MergeSort = async (delay) => {
  var arr = document.querySelectorAll(".SortingArrayElement");
  var arrLen = arr.length;

  await MergeSortMain(arr, 0, arrLen - 1, delay);
};

export { BubbleSort, SelectionSort, MergeSort };
