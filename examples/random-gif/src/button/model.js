import { map } from "meiosis";
import { buttonActions } from "../view/events/button";

export const initialModel = () => ({
  active: false
});

export const modelChanges = map(() => model => {
  model.active = !model.active;
  return model;
}, buttonActions.toggle);
