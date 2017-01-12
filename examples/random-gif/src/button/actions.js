import { map, stream } from "meiosis";
import { BUTTON_TOGGLE } from "./constants";

export const buttonIntents = {
  toggle: stream()
};

export const createActions = ({ propose }) => {
  map(() => propose({ type: BUTTON_TOGGLE }), buttonIntents.toggle);
};
