import React, { useState } from "react";
import { MakeDelay, Sleep } from "./Utils";

export const BubbleSort = async (originalArray, setArray, speedMeter) => {
  let delay = 0;
  let array = originalArray;
  let sortingArrayContainer = document.getElementById("search-visualizer-c");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      sortingArrayContainer.childNodes.item(j).style.background = "var(--red)";
      sortingArrayContainer.childNodes.item(j + 1).style.background =
        "var(--red)";

      await MakeDelay(delay)

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        sortingArrayContainer.childNodes.item(j).style.height = array[j] + "px";
        sortingArrayContainer.childNodes.item(j + 1).style.height =
          array[j + 1] + "px";

        sortingArrayContainer.childNodes.item(j).style.background =
          "var(--green)";
        sortingArrayContainer.childNodes.item(j + 1).style.background =
          "var(--green)";

        await MakeDelay(delay);
      }
      sortingArrayContainer.childNodes.item(j).style.background = "var(--blue)";
      sortingArrayContainer.childNodes.item(j + 1).style.background =
        "var(--blue)";

      await MakeDelay(delay);
    }
    sortingArrayContainer.childNodes.item(
      array.length - i - 1
    ).style.background = "var(--purple)";
  }
  setArray(array);
  console.log("Bubble over");
};
