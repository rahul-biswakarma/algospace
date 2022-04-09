export default function DisableButton(buttonList) {
  buttonList.map((buttonID) => {
    let button = document.getElementById(buttonID);
    button.disabled = true;
    button.style.filter = "grayscale(100%)";
  });
}
