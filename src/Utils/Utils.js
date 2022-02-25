export function MakeDelay(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  }, 1);
}

export function Swap(x, y) {
  const temp = x.style.height;
  x.style.height = y.style.height;
  y.style.height = x = temp;
}

export async function Sleep(milliseconds) {
  await new Promise((resolve) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
    return resolve;
  });
}
