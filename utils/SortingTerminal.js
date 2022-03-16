var comparisonsValue = 0;
var swapValue = 0;

const ArrayHTMLUpdater = async (arr) => {
  var ArraySpan = document.getElementById("arrayElementC");
  ArraySpan.innerHTML = "";
  await new Promise(() => {
    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {
        ArraySpan.innerHTML +=
          arr[i] + "<span style='color:var(--text);'> </span>";
      } else {
        ArraySpan.innerHTML +=
          arr[i] + "<span style='color:var(--text);'>,</span>";
      }
    }

    document.getElementById("totalElementsInArray").innerHTML = arr.length;
    document.getElementById("swapValueC").innerHTML = "_";
    document.getElementById("comparisonValueC").innerHTML = "_";
  });
};

const SwapHTMLUpdater = async () => {
  var swapSpan = document.getElementById("swapValueC");
  swapValue += 1;
  swapSpan.innerHTML = swapValue;
};

const ComparisonsHTMLUpdater = async () => {
  var ComparisonsSpan = document.getElementById("comparisonValueC");
  comparisonsValue += 1;
  ComparisonsSpan.innerHTML = comparisonsValue;
};

export { ArrayHTMLUpdater, SwapHTMLUpdater, ComparisonsHTMLUpdater };
