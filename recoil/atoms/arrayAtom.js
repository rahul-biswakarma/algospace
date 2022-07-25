import { atom } from "recoil";

export const arrayAtom = atom({
  key: "arrayState",
  default: [],
});

// export const updateArrayAtom = (defaultArray, newArray) => {
//   return [newArray];
// };
