import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";

export const temperature = {
  model,
  create: update => {
    const actions = createActions(update);
    return createView(actions);
  }
};
