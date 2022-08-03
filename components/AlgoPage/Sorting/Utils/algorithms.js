import { MakeDelay } from "/utils";
import { getRecoil } from "recoil-nexus";
import { arrayAtom } from "/recoil/atoms/arrayAtom";
import { algoSpeedAtom } from "/recoil/atoms/algoSpeedAtom";
import * as Utils from "/components/AlgoPage/Sorting/Utils/";
import * as Colors from "/components/AlgoPage/Sorting/Utils/colors.js";
import { ArrayDataUpdater } from "/components/AlgoPage/Sorting/Utils";

function SwapArray(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

var comparisons = 0,
  swaps = 0;

export async function BubbleSort() {
  var delay = getRecoil(algoSpeedAtom);
  var array = getRecoil(arrayAtom);
  let arrayBars = document.querySelectorAll(".array-bar");
  let arrLength = arrayBars.length;

  comparisons = 0;
  swaps = 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      delay = getRecoil(algoSpeedAtom);
      Utils.ChangePairElementColor(
        arrayBars[j],
        arrayBars[j + 1],
        Colors.SELECTED_BG_COLOR,
        Colors.SELECTED_BORDER_COLOR
      );
      comparisons += 1;
      await MakeDelay(delay);
      if (Utils.IsHeightGreater(arrayBars[j], arrayBars[j + 1])) {
        Utils.Swap(arrayBars[j], arrayBars[j + 1]);

        // Swaping array
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;

        swaps += 1;
        Utils.ChangePairElementColor(
          arrayBars[j],
          arrayBars[j + 1],
          Colors.SWAPED_BG_COLOR,
          Colors.SWAPED_BORDER_COLOR
        );
        Utils.Change;

        // Updating Stats
        ArrayDataUpdater(array, comparisons, swaps);
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

export const SelectionSort = async () => {
  var delay = getRecoil(algoSpeedAtom);
  var array = getRecoil(arrayAtom);
  let arrayBars = document.querySelectorAll(".array-bar");
  let arrLength = arrayBars.length;
  comparisons = 0;
  swaps = 0;
  var minForUpdateArray = 0;

  for (let i = 0; i < arrLength; i++) {
    let min = arrayBars[i];
    for (let j = i + 1; j < arrLength; j++) {
      delay = getRecoil(algoSpeedAtom);
      Utils.ChangeSingleElementColor(
        arrayBars[j],
        Colors.SELECTED_BG_COLOR,
        Colors.SELECTED_BORDER_COLOR
      );
      await MakeDelay(delay);
      if (Utils.IsHeightGreater(min, arrayBars[j])) {
        comparisons += 1;
        Utils.ChangeSingleElementColor(
          min,
          Colors.DEFAULT_BG_COLOR,
          Colors.DEFAULT_BORDER_COLOR
        );

        // Storing Min Index
        min = arrayBars[j];
        minForUpdateArray = j;

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

    // Swaping array
    let temp = array[i];
    array[i] = array[minForUpdateArray];
    array[minForUpdateArray] = temp;

    swaps += 1;

    // Updating Stats
    ArrayDataUpdater(array, comparisons, swaps);

    Utils.ChangeSingleElementColor(
      arrayBars[i],
      Colors.FINAL_BG_COLOR,
      Colors.FINAL_BORDER_COLOR
    );
    await MakeDelay(delay);
  }
  // await Utils.VerifyArray(arrayBars, 2 * delay);
};

export const InsertionSort = async () => {
  var delay = getRecoil(algoSpeedAtom);
  var array = getRecoil(arrayAtom);
  let arrayBars = document.querySelectorAll(".array-bar");
  let arrLength = arrayBars.length;
  comparisons = 0;
  swaps = 0;

  for (let i = 1; i < arrLength; i++) {
    let j = i;
    while (j > 0 && Utils.IsHeightGreater(arrayBars[j - 1], arrayBars[j])) {
      delay = getRecoil(algoSpeedAtom);
      comparisons += 1;
      Utils.ChangePairElementColor(
        arrayBars[j],
        arrayBars[j - 1],
        Colors.SELECTED_BG_COLOR,
        Colors.SELECTED_BORDER_COLOR
      );
      await MakeDelay(delay);
      Utils.Swap(arrayBars[j], arrayBars[j - 1]);
      // Swaping array
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;

      swaps += 1;

      // Updating Stats
      ArrayDataUpdater(array, comparisons, swaps);
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
