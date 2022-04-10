import { UpdateStats, MakeDelay } from "./TohUtils";

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
  UpdateStats("totalSwap");
  if (
    (source == "tohTower1" && destination == "tohTower2") ||
    (source == "tohTower2" && destination == "tohTower1")
  ) {
    UpdateStats("swapValueAB");
  }
  if (
    (source == "tohTower1" && destination == "tohTower3") ||
    (source == "tohTower3" && destination == "tohTower1")
  ) {
    UpdateStats("swapValueAC");
  }
  if (
    (source == "tohTower2" && destination == "tohTower3") ||
    (source == "tohTower3" && destination == "tohTower2")
  ) {
    UpdateStats("swapValueBC");
  }
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
