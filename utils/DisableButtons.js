import { start } from "nprogress";

export default function DisableButton(buttonList, startStopButton) {
  buttonList.map((buttonID) => {
    let button = document.getElementById(buttonID);
    button.disabled = true;
    button.style.filter = "grayscale(100%)";
  });

  let startButton = startStopButton[0];
  let stopButton = startStopButton[1];

  document.getElementById(startButton).style.transform = "translateY(-100%)";
  document.getElementById(stopButton).style.transform = "translateY(0%)";
}
