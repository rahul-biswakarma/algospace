import { SwapHTMLUpdater, ComparisonsHTMLUpdater } from "./SortingTerminal";

import {
  Swap,
  ChangeSingleElementColor,
  ChangePairElementColor,
  ChangeCodeLineBg,
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
    ChangeCodeLineBg(-1, 0);
    for (j = 0; j < arrLen - i - 1; j++) {
      ChangeCodeLineBg(0, 1);
      ComparisonsHTMLUpdater();
      ChangePairElementColor(
        arr[j],
        arr[j + 1],
        SELECTED_COLOR,
        SELECTED_COLOR_BORDER
      );
      await MakeDelay(Math.floor(delay / 2));

      if (CompareHeigth(arr[j], arr[j + 1])) {
        ChangeCodeLineBg(1, 2);
        ChangePairElementColor(
          arr[j],
          arr[j + 1],
          SWAP_COLOR,
          SWAP_COLOR_BORDER
        );

        Swap(arr[j], arr[j + 1]);
        ChangeCodeLineBg(2, 3);
        SwapHTMLUpdater(i, j);
        await MakeDelay(Math.floor(delay / 2));
      }
      ChangeCodeLineBg(3, -1);
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
    ChangeCodeLineBg(1, -1);
    ChangeCodeLineBg(2, -1);
  }
  ChangeSingleElementColor(arr[0], FINAL_POS_COLOR, FINAL_POS_COLOR_BORDER);
};

const SelectionSort = async (delay) => {
  var i, j, arrLen;
  var minIndex = 0;
  var arr = document.querySelectorAll(".SortingArrayElement");

  arrLen = arr.length;

  for (i = 0; i < arrLen - 1; i++) {
    ChangeCodeLineBg(-1, 0);

    minIndex = i;

    for (j = i + 1; j < arrLen; j++) {
      ChangeCodeLineBg(0, 1);
      ComparisonsHTMLUpdater();
      ChangeSingleElementColor(arr[j], SELECTED_COLOR, SELECTED_COLOR_BORDER);

      await MakeDelay(Math.floor(delay / 2));

      if (CompareHeigth(arr[minIndex], arr[j])) {
        ChangeCodeLineBg(1, 2);
        ChangeSingleElementColor(
          arr[minIndex],
          DEFAULT_COLOR,
          DEFAULT_COLOR_BORDER
        );
        minIndex = j;
        ChangeCodeLineBg(2, 3);
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

    ChangeCodeLineBg(3, 4);
    ChangeCodeLineBg(1, -1);
    ChangeCodeLineBg(2, -1);
  }

  ChangeSingleElementColor(
    arr[arrLen - 1],
    FINAL_POS_COLOR,
    FINAL_POS_COLOR_BORDER
  );
};

export { BubbleSort, SelectionSort };
