import { batch } from "react-redux";
import { MakeDelay } from "/utils";
import { store } from "/redux/store";
import { setTowerA, setTowerB, setTowerC } from "/redux/reducers/hanoiSlice";

export const TowerOfHanoi = async () => {
  var towerA = store.getState().hanoi.towerA;
  let n = towerA.length;
  await TowerOfHanoiHelper(n, "towerA", "towerC", "towerB");
};

const TowerOfHanoiHelper = async (n, from, to, aux) => {
  if (n == 0) return;

  await TowerOfHanoiHelper(n - 1, from, aux, to);
  await transferDisc(from, to);
  await MakeDelay(store.getState().hanoi.speed);
  await TowerOfHanoiHelper(n - 1, aux, to, from);
};

const transferDisc = async (source, destination) => {
  var temp = 0;
  var sourceArr = [];
  var destinationArr = [];

  if (source === "towerA") {
    let arr = store.getState().hanoi.towerA;
    if (arr.length === 0) return;
    temp = arr[0];
    sourceArr = arr.slice(1);
    store.dispatch(setTowerA(sourceArr));
  } else if (source === "towerB") {
    let arr = store.getState().hanoi.towerB;
    if (arr.length === 0) return;
    temp = arr[0];
    sourceArr = arr.slice(1);
    store.dispatch(setTowerB(sourceArr));
  } else if (source === "towerC") {
    let arr = store.getState().hanoi.towerC;
    if (arr.length === 0) return;
    temp = arr[0];
    sourceArr = arr.slice(1);
    store.dispatch(setTowerC(sourceArr));
  }

  if (destination == "towerA") {
    destinationArr = [temp, ...store.getState().hanoi.towerA];
    store.dispatch(setTowerA(destinationArr));
  } else if (destination == "towerB") {
    destinationArr = [temp, ...store.getState().hanoi.towerB];
    store.dispatch(setTowerB(destinationArr));
  } else {
    destinationArr = [temp, ...store.getState().hanoi.towerC];
    store.dispatch(setTowerC(destinationArr));
  }
};
