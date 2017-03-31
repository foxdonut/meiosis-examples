import { model, validateModel } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";

export const entry = {
  model,
  validateModel,
  create: update => {
    const actions = createActions(update);
    return createView(actions);
  }
};
