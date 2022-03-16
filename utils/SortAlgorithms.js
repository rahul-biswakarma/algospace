import { SwapHTMLUpdater, ComparisonsHTMLUpdater } from "./SortingTerminal";

import {
  Swap,
  ChangeSingleElementColor,
  ChangePairElementColor,
  MakeDelay,
  CompareHeigth,
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
        await MakeDelay(Math.floor(delay / 2));
        Swap(arr[j], arr[j + 1]);
        SwapHTMLUpdater();
      }
      ChangeSingleElementColor(arr[j], DEFAULT_COLOR, DEFAULT_COLOR_BORDER);
    }
    ChangeSingleElementColor(
      arr[arrLen - 1 - i],
      FINAL_POS_COLOR,
      FINAL_POS_COLOR_BORDER
    );
  }
  ChangeSingleElementColor(arr[0], FINAL_POS_COLOR, FINAL_POS_COLOR_BORDER);
};

export { BubbleSort };
