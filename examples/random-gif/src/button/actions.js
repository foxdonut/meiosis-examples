import { BUTTON_TOGGLE } from "./constants";

export const createActions = ({ propose }) => ({
  onToggleButton: evt => {
    evt.preventDefault();
    propose({ type: BUTTON_TOGGLE });
  }
});
