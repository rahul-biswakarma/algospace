export function getDFSNeighbours(x, y, grid, endX, endY) {
  let neighbours = [];
  if (x - 1 >= 0 && grid[x - 1][y].visited === false)
    neighbours.push({ x: x - 1, y: y });

  if (x + 1 < endX && grid[x + 1][y].visited === false)
    neighbours.push({ x: x + 1, y: y });

  if (y - 1 >= 0 && grid[x][y - 1].visited === false)
    neighbours.push({ x: x, y: y - 1 });

  if (y + 1 < endY && grid[x][y + 1].visited === false)
    neighbours.push({ x: x, y: y + 1 });

  return neighbours;
}

export function getBFSNeighbours(x, y, grid, endX, endY) {
  let neighbours = [];
  // if (x - 1 >= 0 && grid[x - 1][y].visited === false)
  //   neighbours.push({ x: x - 1, y: y });

  if (x + 1 < endX && grid[x + 1][y].visited === false)
    neighbours.push({ x: x + 1, y: y });

  // if (y - 1 >= 0 && grid[x][y - 1].visited === false)
  //   neighbours.push({ x: x, y: y - 1 });

  if (y + 1 < endY && grid[x][y + 1].visited === false)
    neighbours.push({ x: x, y: y + 1 });

  return neighbours;
}
