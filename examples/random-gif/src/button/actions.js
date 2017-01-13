import { on, stream } from "meiosis";
import { BUTTON_TOGGLE } from "./constants";

export const intents = {
  toggle: stream()
};

export const createActions = ({ propose }) => {
  on(() => propose({ type: BUTTON_TOGGLE }), intents.toggle);
};
