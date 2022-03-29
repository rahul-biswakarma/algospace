import { MakeDelay } from "./TohUtils";

const transferDisc = async (source, destination) => {
  try {
    let dn = document.getElementById(source).childNodes[0];
    let dnClone = dn.cloneNode(true);
    dn.remove();
    document
      .getElementById(destination)
      .insertBefore(
        dnClone,
        document.getElementById(destination).childNodes[0]
      );
  } catch {}
};

const TowerOfHanoiFunction = async (n, from, to, aux, delay) => {
  if (n == 0) {
    return;
  }
  await TowerOfHanoiFunction(n - 1, from, aux, to, delay);
  await transferDisc(from, to);
  await MakeDelay(delay);
  await TowerOfHanoiFunction(n - 1, aux, to, from, delay);
};

const TowerOfHanoi = async (discCount, delay) => {
  await TowerOfHanoiFunction(
    discCount,
    "tohTower1",
    "tohTower3",
    "tohTower2",
    delay
  );
};

export default TowerOfHanoi;
