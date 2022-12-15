import { atom } from "recoil";

export const nameState = atom({
  key: "name", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});