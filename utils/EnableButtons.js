export default function DisableButton(buttonList, startStopButton) {
  console.log(buttonList);
  buttonList.map((buttonID) => {
    let button = document.getElementById(buttonID);
    console.log(buttonID);
    button.disabled = false;
    button.style.filter = "grayscale(0%)";
  });

  let startButton = startStopButton[0];
  let stopButton = startStopButton[1];

  document.getElementById(startButton).style.transform = "translateY(0%)";
  document.getElementById(stopButton).style.transform = "translateY(-100%)";
}
