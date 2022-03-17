export default function ChangeAlgoOptions(
  title,
  deactiveIconId,
  deactiveDivId,
  activeIconId,
  activeDivId
) {
  document.getElementById("optionHeaderTitle").innerHTML = title;
  document.getElementById(deactiveIconId).classList.remove("activeBlue");
  document.getElementById(activeIconId).classList.add("activeBlue");
  document.getElementById(deactiveDivId).classList.add("hideOptionDivs");
  document.getElementById(activeDivId).classList.remove("hideOptionDivs");
  document.getElementById(activeDivId).classList.add("showOptionDivs");
}
