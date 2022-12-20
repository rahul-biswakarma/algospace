import {
  incrementComparisons,
  incrementSwaps,
  setArray,
  setCompElements,
  setSwapElements,
  setSpecialElement,
  setMergeArr1,
  setMergeArr2,
  resetMergeArrays,
} from "/redux/reducers/sortingSlice";
import * as COLORS from "./colors";

import { MakeDelay } from "/utils";
import { batch } from "react-redux";
import { store } from "/redux/store";

function generateArray(l, h) {
  let arr = [];
  for (let i = l; i <= h; i++) {
    arr.push(i);
  }
  return arr;
}

// Bubble Sort
export async function BubbleSort() {
  let array = store.getState().sorting.array.slice();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (!store.getState().sorting.running) return;
      await MakeDelay(store.getState().sorting.speed);
      batch(() => {
        store.dispatch(setCompElements([j, j + 1]));
        store.dispatch(incrementComparisons());
      });
      array = store.getState().sorting.array.slice();
      if (array[j] > array[j + 1]) {
        store.dispatch(setSwapElements([j, j + 1]));
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        store.dispatch(incrementSwaps());
        await MakeDelay(store.getState().sorting.speed);
      }
      batch(() => {
        store.dispatch(setSwapElements([-1, -1]));
        store.dispatch(setArray(array));
      });
    }
  }
}

// Selection Sort
export async function SelectionSort() {
  let array = store.getState().sorting.array.slice();
  for (let i = 0; i < array.length; i++) {
    let min = i;
    store.dispatch(setSpecialElement(min));
    for (let j = i + 1; j < array.length; j++) {
      if (!store.getState().sorting.running) return;
      store.dispatch(setCompElements([min, j]));
      await MakeDelay(store.getState().sorting.speed);
      if (array[j] < array[min]) {
        min = j;
      }
      batch(() => {
        store.dispatch(incrementComparisons());
        store.dispatch(setSwapElements([-1, -1]));
        store.dispatch(setCompElements([min, j]));
      });
    }
    array = store.getState().sorting.array.slice();
    store.dispatch(setSwapElements([i, min]));
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      store.dispatch(incrementSwaps());
      await MakeDelay(store.getState().sorting.speed);
    }
    batch(() => {
      store.dispatch(setSwapElements([-1, -1]));
      store.dispatch(setArray(array));
      store.dispatch(setSpecialElement(-1));
    });
  }
}

// Insertion Sort
export async function InsertionSort() {
  let array = store.getState().sorting.array.slice();
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      if (!store.getState().sorting.running) return;
      await MakeDelay(store.getState().sorting.speed);

      array = store.getState().sorting.array.slice();
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      batch(() => {
        store.dispatch(setCompElements([i, j]));
        store.dispatch(setSwapElements([j, j - 1]));
        store.dispatch(incrementComparisons());
        store.dispatch(incrementSwaps());
        store.dispatch(setArray(array));
      });
      j--;
    }
  }
}

// Merge Sort
export async function MergeSort() {
  let array = store.getState().sorting.array.slice();
  await MergeSortHelper(0, array.length - 1);
}

// Merge Sort Helper
async function MergeSortHelper(l, h) {
  if (!store.getState().sorting.running) return;
  if (l >= h) return;
  let mid = Math.floor((l + h) / 2);

  await MergeSortHelper(l, mid);
  await MergeSortHelper(mid + 1, h);
  batch(() => {
    store.dispatch(setMergeArr1([l, mid]));
    store.dispatch(setMergeArr2([mid + 1, h]));
  });
  await Merge(l, mid, h);
  store.dispatch(resetMergeArrays());
}

// Merge Function
async function Merge(l, mid, h) {
  let array = store.getState().sorting.array.slice();
  let i = l;
  let j = mid + 1;
  let k = l;
  let B = [];
  while (i <= mid && j <= h) {
    if (!store.getState().sorting.running) return;
    // await MakeDelay(store.getState().sorting.speed);
    batch(() => {
      store.dispatch(setCompElements([i, i]));
      store.dispatch(incrementComparisons());
    });
    if (array[i] < array[j]) {
      B[k++] = array[i++];
    } else {
      B[k++] = array[j++];
    }
  }
  for (; i <= mid; i++) {
    if (!store.getState().sorting.running) return;
    await MakeDelay(store.getState().sorting.speed);
    batch(() => {
      store.dispatch(setCompElements([i, i]));
      store.dispatch(incrementComparisons());
    });
    B[k++] = array[i];
  }
  for (; j <= h; j++) {
    if (!store.getState().sorting.running) return;
    await MakeDelay(store.getState().sorting.speed);
    batch(() => {
      store.dispatch(setCompElements([j, j]));
      store.dispatch(incrementComparisons());
    });
    B[k++] = array[j];
  }
  for (let i = l; i <= h; i++) {
    if (!store.getState().sorting.running) return;
    await MakeDelay(store.getState().sorting.speed);
    array = store.getState().sorting.array.slice();
    array[i] = B[i];
    batch(() => {
      store.dispatch(setSwapElements([i, i]));
      store.dispatch(incrementSwaps());
      store.dispatch(setArray(array));
    });
  }
}
