var comparisonsValue = 0;
var swapValue = 0;

const ArrayHTMLUpdater = async (arr) => {
  var ArraySpan = document.getElementById("arrayElementC");
  ArraySpan.innerHTML = "";
  await new Promise(() => {
    for (let i = 0; i < arr.length; i++) {
      ArraySpan.innerHTML +=
        "<span class='noselect ArrayElementValueBox' id='sortingStatsArray" +
        i +
        "'>" +
        arr[i] +
        "</span>";
    }

    document.getElementById("totalElementsInArray").innerHTML = arr.length;
    document.getElementById("swapValueC").innerHTML = "0";
    document.getElementById("comparisonValueC").innerHTML = "0";
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
