import { BUTTON_TOGGLE } from "./constants";

export function actions(propose) {
  return {
    toggleButton: () => propose({ type: BUTTON_TOGGLE })
  };
}
