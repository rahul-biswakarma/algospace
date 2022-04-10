const GenerateDisc = (discCount) => {
  var tower = document.getElementById("tohTower1");
  document.getElementById("tohTower2").innerHTML = "";
  document.getElementById("tohTower3").innerHTML = "";

  tower.innerHTML = "";
  var towerHeight = tower.clientHeight;
  var towerWidth = tower.clientWidth - 20;

  var noOfDics = discCount;
  var discHeight = Math.floor(towerHeight / discCount) - 20;
  var arr = [];
  var discWidth = Math.floor(towerWidth / noOfDics + 1);
  const tempDiscWidth = discWidth;
  for (let i = 0; i < noOfDics; i++) {
    arr.push(discWidth);
    var disc = document.createElement("div");
    disc.setAttribute("id", "tohD" + (noOfDics - i));
    disc.style.height = discHeight + "px";
    disc.style.width = discWidth + "px";
    disc.classList.add("TowerDisc");
    tower.appendChild(disc);

    discWidth += tempDiscWidth;
  }
};

const UpdateStats = (id) => {
  console.log(id);
  let element = document.getElementById(id);
  let value = parseInt(element.innerHTML);

  value += 1;
  element.innerHTML = value;
};

const MakeDelay = async (ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};

export { GenerateDisc, UpdateStats, MakeDelay };
