function bubbleSort(valueArrayOriginal, speedMeterOriginal, animationDelay) {
  var valueArray = valueArrayOriginal;
  // let speedPer = Math.floor((speedMeterOriginal / 1000) * 100);
  var speedMeter = 0;
  let size = valueArray.length;
  let sortingArrayContainer = document.getElementById("sorting-array-c");

  for (let i = 0; i < size - 1; i++) {
    setTimeout(() => {
      for (let j = 0; j < size - i - 1; j++) {
        setTimeout(() => {
          sortingArrayContainer.childNodes.item(j).style.background =
            "var(--red)";
          sortingArrayContainer.childNodes.item(j + 1).style.background =
            "var(--text-prim)";
        }, speedMeter);

        if (speedMeter > 0) speedMeter += Math.floor(animationDelay / 15);

        setTimeout(() => {
          console.log("Inside timeout");
          if (valueArray[j] > valueArray[j + 1]) {
            sortingArrayContainer.childNodes.item(j).style.height =
              valueArray[j + 1] + "px";
            sortingArrayContainer.childNodes.item(j + 1).style.height =
              valueArray[j] + "px";

            let temp = valueArray[j];
            valueArray[j] = valueArray[j + 1];
            valueArray[j + 1] = temp;
          }
        }, speedMeter);

        speedMeter += Math.floor(animationDelay / 15);

        setTimeout(() => {
          sortingArrayContainer.childNodes.item(j).style.background =
            "var(--blue2)";
          sortingArrayContainer.childNodes.item(j + 1).style.background =
            "var(--blue2)";
        }, speedMeter);
      }
    }, speedMeter);
  }
}

export { bubbleSort };
