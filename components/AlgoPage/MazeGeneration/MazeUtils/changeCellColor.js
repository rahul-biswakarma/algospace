export function changeCellColor(x, y, color) {
  document.getElementById(`x${x}y${y}`).style.backgroundColor = color;
}
export function changeCellBorderColor(x, y, color) {
  document.getElementById(`x${x}y${y}`).style.borderColor = color;
}
