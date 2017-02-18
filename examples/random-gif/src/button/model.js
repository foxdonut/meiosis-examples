import { assoc } from "ramda";
import { actions } from "./actions";

export const initialModel = () => ({
  active: false
});

export const modelChanges = actions.toggle.map(() => model =>
  assoc("active", !model.active, model));
