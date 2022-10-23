export default function removeWall(x, y, nextX, nextY) {
  var cellId;
  if (x - 1 === nextX || y - 1 === nextY) cellId = `x${nextX}y${nextY}`;
  else cellId = `x${x}y${y}`;

  if (y === nextY) {
    document.getElementById(cellId).style.borderBottomWidth = "0px";
  }
  if (x === nextX) {
    document.getElementById(cellId).style.borderRightWidth = "0px";
  }
}
