// selectors/name.js

import { selector } from "recoil";
import { nameState } from "../atoms/name";

export const lengthStates = selector({
  key: "lengthStateA", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const name = get(nameState);
//     const lengthOfName;
    return name;
  },
});