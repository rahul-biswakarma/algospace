export default function DisableButton(buttonList) {
  console.log(buttonList);
  buttonList.map((buttonID) => {
    let button = document.getElementById(buttonID);
    console.log(buttonID);
    button.disabled = false;
    button.style.filter = "grayscale(0%)";
  });
}
