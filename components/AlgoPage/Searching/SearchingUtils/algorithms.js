import { MakeDelay } from "/utils";
import { batch } from "react-redux";
import { store } from "/redux/store";

import {
  setFoundIndex,
  setCompElement,
  setStatus,
  incrementComparisons,
  setRangeLeft,
  setRangeRight,
} from "/redux/reducers/searchingSlice";

export async function LinearSearch() {
  const array = store.getState().searching.array;
  const target = store.getState().searching.target;

  for (let i = 0; i < array.length; i++) {
    if (!store.getState().searching.isSearching) return;
    await MakeDelay(store.getState().searching.speed);
    store.dispatch(setCompElement(i));
    store.dispatch(incrementComparisons());
    if (array[i] === target) {
      store.dispatch(setFoundIndex(i));
      store.dispatch(setStatus("found"));
      return i;
    }
  }
  batch(() => {
    store.dispatch(setStatus("not found"));
    store.dispatch(setCompElement(-1));
  });
  await MakeDelay(store.getState().searching.speed);
  return -1;
}

export async function BinarySearch() {
  const array = store.getState().searching.array;
  const target = store.getState().searching.target;

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    store.dispatch(setRangeLeft(low));
    store.dispatch(setRangeRight(high));
    if (!store.getState().searching.isSearching) return;
    let mid = Math.floor((low + high) / 2);
    store.dispatch(setCompElement(mid));
    store.dispatch(incrementComparisons());
    await MakeDelay(store.getState().searching.speed);
    if (array[mid] === target) {
      store.dispatch(setFoundIndex(mid));
      store.dispatch(setStatus("found"));
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  batch(() => {
    store.dispatch(setStatus("not found"));
    store.dispatch(setCompElement(-1));
  });
  await MakeDelay(store.getState().searching.speed);
  return -1;
}

export async function JumpSearch() {
  const array = store.getState().searching.array;
  const target = store.getState().searching.target;

  let step = Math.floor(Math.sqrt(array.length));
  let prev = 0;
  while (array[Math.min(step, array.length) - 1] < target) {
    batch(() => {
      store.dispatch(setRangeLeft(prev));
      store.dispatch(setRangeRight(step));
    });
    await MakeDelay(store.getState().searching.speed);
    if (!store.getState().searching.isSearching) return;
    prev = step;
    step += Math.floor(Math.sqrt(array.length));
    if (prev >= array.length) {
      store.dispatch(setStatus("not found"));
      return -1;
    }
  }
  batch(() => {
    store.dispatch(setRangeLeft(prev));
    store.dispatch(setRangeRight(step));
    store.dispatch(setCompElement(prev));
  });
  batch(() => {
    store.dispatch(setCompElement(prev));
    store.dispatch(incrementComparisons());
  });
  while (array[prev] < target) {
    await MakeDelay(store.getState().searching.speed);
    if (!store.getState().searching.isSearching) return;
    prev++;
    batch(() => {
      store.dispatch(setCompElement(prev));
      store.dispatch(incrementComparisons());
    });
    if (prev === Math.min(step, array.length)) {
      store.dispatch(setStatus("not found"));
      return -1;
    }
  }
  await MakeDelay(store.getState().searching.speed);
  store.dispatch(setCompElement(prev));
  if (array[prev] === target) {
    batch(() => {
      store.dispatch(setFoundIndex(prev));
      store.dispatch(setStatus("found"));
    });
    return prev;
  }
  batch(() => {
    store.dispatch(setStatus("not found"));
    store.dispatch(setCompElement(-1));
  });
  await MakeDelay(store.getState().searching.speed);
  return -1;
}
