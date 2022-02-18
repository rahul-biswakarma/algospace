async function bubbleSort(
  valueArrayOriginal,
  speedMeterOriginal,
  animationDelay,
  stopFunc = false
) {
  if (stopFunc) {
    return;
  }
  return new Promise(async (resolve, reject) => {
    var valueArray = valueArrayOriginal;
    let size = valueArray.length;
    let sortingArrayContainer = document.getElementById("sorting-array-c");

    let speedPer = Math.floor((speedMeterOriginal / 1000) * 100);
    var speedMeter = 0;

    for (let i = 0; i < size - 1; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        console.log(speedMeter);
        if (valueArray[j] > valueArray[j + 1]) {
          sortingArrayContainer.childNodes.item(j).style.height =
            valueArray[j + 1] + "px";
          sortingArrayContainer.childNodes.item(j + 1).style.height =
            valueArray[j] + "px";
          sortingArrayContainer.childNodes.item(j).style.background =
            "var(--red)";
          sortingArrayContainer.childNodes.item(j + 1).style.background =
            "var(--red)";

          let temp = valueArray[j];
          valueArray[j] = valueArray[j + 1];
          valueArray[j + 1] = temp;
        }
        await new Promise((resolve) => setTimeout(resolve, speedMeter));
        sortingArrayContainer.childNodes.item(j).style.background =
          "var(--blue2)";
        sortingArrayContainer.childNodes.item(j + 1).style.background =
          "var(--blue2)";
        if (speedMeter === 0) speedMeter = animationDelay;
      }
    }
    console.log("bubble over");

    resolve(true);
  });
}

export { bubbleSort };
