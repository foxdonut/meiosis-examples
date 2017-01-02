import { propose } from "meiosis";
import { BUTTON_TOGGLE } from "./constants";

export const actions = {
  toggleButton: () => propose({ type: BUTTON_TOGGLE })
};

export const handlers = {
  onToggleButton: evt => {
    evt.preventDefault();
    actions.toggleButton();
  }
};
