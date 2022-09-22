import { batch } from "react-redux";
import { store } from "/redux/store";
import { setHeight, setTowerA, resetStats } from "/redux/reducers/hanoiSlice";

export const generateDiscs = () => {
  store.dispatch(resetStats());
  var tower = document.getElementById("visualizer-tower-a");
  var noOfDics = store.getState().hanoi.disc;
  var maxHeight = store.getState().hanoi.maxHeight;

  var towerHeight = tower.clientHeight;
  var towerWidth = tower.clientWidth - 40;

  var discHeight = Math.floor(towerHeight / noOfDics) - 20;
  var arr = [];
  var discWidth = Math.floor(towerWidth / noOfDics + 1);
  const tempDiscWidth = discWidth;
  for (let i = 0; i < noOfDics; i++) {
    arr.push(discWidth);
    discWidth += tempDiscWidth;
  }
  discHeight = Math.min(discHeight, maxHeight);
  batch(() => {
    store.dispatch(setTowerA(arr));
    store.dispatch(setHeight(discHeight));
  });
};
