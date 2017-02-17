import { buttonActions } from "./actions";

export const initialModel = () => ({
  active: false
});

export const modelChanges = buttonActions.toggle.map(() => model => {
  model.active = !model.active;
  return model;
});
