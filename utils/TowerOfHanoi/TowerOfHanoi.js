import { MakeDelay } from "./TohUtils";

const transferDisc = (source, destination) => {
  let dn = document.getElementById(source).childNodes[0];
  let dnClone = dn.cloneNode(true);
  dn.remove();
  document.getElementById(destination).appendChild(dnClone);
};

const TowerOfHanoiFunction = async (n, from, to, aux, delay) => {
  if (n == 1) {
    transferDisc(from, to);
    return;
  }

  TowerOfHanoiFunction(n - 1, from, to, aux, delay);

  transferDisc(from, to);

  await MakeDelay(delay);

  TowerOfHanoiFunction(n - 1, aux, from, to, delay);

  transferDisc(aux, from);

  await MakeDelay(delay);
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
