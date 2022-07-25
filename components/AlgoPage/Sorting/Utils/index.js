import { MakeDelay } from "/utils";
import * as Colors from "/components/AlgoPage/Sorting/Utils/colors.js";

export const IsHeightGreater = (elementOne, elementTwo) => {
  if (parseInt(elementOne.style.height) > parseInt(elementTwo.style.height)) {
    return true;
  }
  return false;
};

export const ChangePairElementColor = (
  elementOne,
  elementTwo,
  backgroundColor,
  borderColor
) => {
  elementOne.style.background = backgroundColor;
  elementTwo.style.background = backgroundColor;
  elementOne.style.borderColor = borderColor;
  elementTwo.style.borderColor = borderColor;
  return Promise.resolve("Success");
};

export const ChangeSingleElementColor = (
  element,
  backgroundColor,
  borderColor
) => {
  element.style.background = backgroundColor;
  element.style.borderColor = borderColor;
  return Promise.resolve("Success");
};

export const Swap = (elementOne, elementTwo) => {
  const temp = elementOne.style.height;
  elementOne.style.height = elementTwo.style.height;
  elementTwo.style.height = temp;
};

export const VerifyArray = async (arrayBars, delay) => {
  let arrLength = arrayBars.length;
  await MakeDelay(delay);
  for (let i = 0; i < arrLength; i++) {
    ChangeSingleElementColor(
      arrayBars[i],
      Colors.RED_BG_COLOR,
      Colors.RED_BORDER_COLOR
    );
    await MakeDelay(delay);
    ChangeSingleElementColor(
      arrayBars[i],
      Colors.FINAL_BG_COLOR,
      Colors.FINAL_BORDER_COLOR
    );
    await MakeDelay(delay);
  }
};
