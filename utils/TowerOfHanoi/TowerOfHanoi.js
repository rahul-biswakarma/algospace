import { UpdateStats, MakeDelay } from "./TohUtils";

var total = 0,
  ab = 0,
  bc = 0,
  ac = 0;

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
    total += 1;
    UpdateStats("totalTransfers", total);
    if (source == "tohTower1" && destination == "tohTower2") {
      ab++;
      UpdateStats("swapValueAB", ab);
    }
    if (source == "tohTower1" && destination == "tohTower3") {
      ac++;
      UpdateStats("swapValueAC", ac);
    }
    if (source == "tohTower2" && destination == "tohTower3") {
      bc++;
      UpdateStats("swapValueBC", bc);
    }
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
