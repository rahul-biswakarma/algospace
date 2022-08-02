import { MakeDelay } from "/utils";
import { getRecoil } from "recoil-nexus";
import { algoSpeedAtom } from "/recoil/atoms/algoSpeedAtom";
import * as Utils from "/components/AlgoPage/Sorting/Utils/";
import * as Colors from "/components/AlgoPage/Sorting/Utils/colors.js";

export async function BubbleSort() {
  var delay = getRecoil(algoSpeedAtom);
  let arrayBars = document.querySelectorAll(".array-bar");
  let arrLength = arrayBars.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      delay = getRecoil(algoSpeedAtom);
      Utils.ChangePairElementColor(
        arrayBars[j],
        arrayBars[j + 1],
        Colors.SELECTED_BG_COLOR,
        Colors.SELECTED_BORDER_COLOR
      );
      await MakeDelay(delay);
      if (Utils.IsHeightGreater(arrayBars[j], arrayBars[j + 1])) {
        Utils.Swap(arrayBars[j], arrayBars[j + 1]);
        Utils.ChangePairElementColor(
          arrayBars[j],
          arrayBars[j + 1],
          Colors.SWAPED_BG_COLOR,
          Colors.SWAPED_BORDER_COLOR
        );
        Utils.Change;
        await MakeDelay(delay);
      }
      Utils.ChangePairElementColor(
        arrayBars[j],
        arrayBars[j + 1],
        Colors.DEFAULT_BG_COLOR,
        Colors.DEFAULT_BORDER_COLOR
      );
      await MakeDelay(delay);
    }
    Utils.ChangeSingleElementColor(
      arrayBars[arrLength - i - 1],
      Colors.FINAL_BG_COLOR,
      Colors.FINAL_BORDER_COLOR
    );
  }
  await Utils.VerifyArray(arrayBars, 2 * delay);
}

export const SelectionSort = async (delay) => {
  let arrayBars = document.querySelectorAll(".array-bar");
  let arrLength = arrayBars.length;

  for (let i = 0; i < arrLength; i++) {
    let min = arrayBars[i];
    for (let j = i + 1; j < arrLength; j++) {
      Utils.ChangeSingleElementColor(
        arrayBars[j],
        Colors.SELECTED_BG_COLOR,
        Colors.SELECTED_BORDER_COLOR
      );
      await MakeDelay(delay);
      if (Utils.IsHeightGreater(min, arrayBars[j])) {
        Utils.ChangeSingleElementColor(
          min,
          Colors.DEFAULT_BG_COLOR,
          Colors.DEFAULT_BORDER_COLOR
        );
        min = arrayBars[j];
        Utils.ChangeSingleElementColor(
          min,
          Colors.SWAPED_BG_COLOR,
          Colors.SWAPED_BORDER_COLOR
        );
      }
      Utils.ChangeSingleElementColor(
        arrayBars[j],
        Colors.DEFAULT_BG_COLOR,
        Colors.DEFAULT_BORDER_COLOR
      );
      await MakeDelay(delay);
    }

    await MakeDelay(delay);
    Utils.Swap(min, arrayBars[i]);
    Utils.ChangeSingleElementColor(
      arrayBars[i],
      Colors.FINAL_BG_COLOR,
      Colors.FINAL_BORDER_COLOR
    );
    await MakeDelay(delay);
  }
  // await Utils.VerifyArray(arrayBars, 2 * delay);
};

export const InsertionSort = async (delay) => {
  let arrayBars = document.querySelectorAll(".array-bar");
  let arrLength = arrayBars.length;

  for (let i = 1; i < arrLength; i++) {
    let j = i;
    while (j > 0 && Utils.IsHeightGreater(arrayBars[j - 1], arrayBars[j])) {
      Utils.ChangePairElementColor(
        arrayBars[j],
        arrayBars[j - 1],
        Colors.SELECTED_BG_COLOR,
        Colors.SELECTED_BORDER_COLOR
      );
      await MakeDelay(delay);
      Utils.Swap(arrayBars[j], arrayBars[j - 1]);
      Utils.ChangePairElementColor(
        arrayBars[j],
        arrayBars[j - 1],
        Colors.SWAPED_BG_COLOR,
        Colors.SWAPED_BORDER_COLOR
      );
      Utils.ChangePairElementColor(
        arrayBars[j],
        arrayBars[j - 1],
        Colors.FINAL_BG_COLOR,
        Colors.FINAL_BORDER_COLOR
      );
      Utils.ChangeSingleElementColor(
        arrayBars[j],
        Colors.DEFAULT_BG_COLOR,
        Colors.DEFAULT_BORDER_COLOR
      );
      await MakeDelay(delay);
      j--;
    }
  }
  await Utils.VerifyArray(arrayBars, 2 * delay);
};

const Merge = (arrayBars, left, mid, right) => {
  let temp = [];
  let i = left;
  let j = mid + 1;
  while (i <= mid && j <= right) {
    if (Utils.IsHeightGreater(arrayBars[i], arrayBars[j])) {
      temp.push(arrayBars[i]);
      i++;
    } else {
      temp.push(arrayBars[j]);
      j++;
    }
  }
  while (i <= mid) {
    temp.push(arrayBars[i]);
    i++;
  }
  while (j <= right) {
    temp.push(arrayBars[j]);
    j++;
  }
  for (let k = 0; k < temp.length; k++) {
    arrayBars[left + k] = temp[k];
  }
};

const MergeSortHelper = (arrayBars, left, right) => {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    MergeSortHelper(arrayBars, left, mid);
    MergeSortHelper(arrayBars, mid + 1, right);
    Merge(arrayBars, left, mid, right);
  }
};

export const MergeSort = async (delay) => {
  let arrayBars = document.querySelectorAll(".array-bar");
  let arrLength = arrayBars.length;

  let left = 0;
  let right = arrLength - 1;
  MergeSortHelper(arrayBars, left, right);
};
