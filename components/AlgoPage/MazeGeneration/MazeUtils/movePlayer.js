import { store } from "/redux/store";
import {
  setPlayerPosotion,
  setTranslateX,
  setTranslateY,
} from "/redux/reducers/mazeSlice";
import { batch } from "react-redux";

export default function movePlayer(e) {
  e.preventDefault();
  const player = document.getElementById("player");
  const translateX = store.getState().maze.translateX;
  const translateY = store.getState().maze.translateY;
  const playerPosition = store.getState().maze.playerPosition;
  const randomIdNumber = store.getState().maze.randomIdNumber;
  var x = playerPosition.x;
  var y = playerPosition.y;

  // Move Up
  if (e.key === "ArrowUp") {
    if (checkIfPlayerCanMove(x, y, "up")) {
      player.style.transform = `translate(${translateX}%,${translateY - 104}%)`;
      batch(() => {
        store.dispatch(setTranslateY(translateY - 100));
        store.dispatch(setPlayerPosotion({ x: x - 1, y: y }));
      });
    }
  }
  // Move Down
  else if (e.key === "ArrowDown") {
    if (checkIfPlayerCanMove(x, y, "down")) {
      getOffset(document.getElementById("player")).left = getOffset(
        document.getElementById(`${randomIdNumber}x${x + 1}y${y}`)
      ).left;
      getOffset(document.getElementById("player")).top = getOffset(
        document.getElementById(`${randomIdNumber}x${x + 1}y${y}`)
      ).top;
      // player.style.transform = `translate(${translateX}%,${translateY + 104}%)`;
      batch(() => {
        store.dispatch(setTranslateY(translateY + 100));
        store.dispatch(setPlayerPosotion({ x: x + 1, y: y }));
      });
    }
  }
  // Move Left
  else if (e.key === "ArrowLeft") {
    if (checkIfPlayerCanMove(x, y, "left")) {
      player.style.transform = `translate(${translateX - 104}%,${translateY}%)`;
      batch(() => {
        store.dispatch(setTranslateX(translateX - 100));
        store.dispatch(setPlayerPosotion({ x: x, y: y - 1 }));
      });
    }
  }
  // Move Right
  else if (e.key === "ArrowRight") {
    if (checkIfPlayerCanMove(x, y, "right")) {
      player.style.transform = `translate(${translateX + 104}%,${translateY}%)`;
      batch(() => {
        store.dispatch(setTranslateX(translateX + 100));
        store.dispatch(setPlayerPosotion({ x: x, y: y + 1 }));
      });
    }
  }
}

function checkIfPlayerCanMove(x, y, direction) {
  const cellCount = store.getState().maze.cellCount;
  const randomIdNumber = store.getState().maze.randomIdNumber;
  if (direction == "up" && x - 1 >= 0) {
    if (
      document.getElementById(`${randomIdNumber}x${x - 1}y${y}`).style
        .borderBottomWidth === "0px"
    )
      return true;
    return false;
  }
  if (direction == "down" && x + 1 < cellCount) {
    if (
      document.getElementById(`${randomIdNumber}x${x}y${y}`).style
        .borderBottomWidth === "0px"
    )
      return true;
    return false;
  }
  if (direction == "left" && y - 1 >= 0) {
    if (
      document.getElementById(`${randomIdNumber}x${x}y${y - 1}`).style
        .borderRightWidth === "0px"
    )
      return true;
    return false;
  }
  if (direction == "right" && y + 1 < cellCount) {
    if (
      document.getElementById(`${randomIdNumber}x${x}y${y}`).style
        .borderRightWidth === "0px"
    )
      return true;
    return false;
  }
}

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}
