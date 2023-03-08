import { atom } from "recoil";

export const editModalState = atom({
  key: "createModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});