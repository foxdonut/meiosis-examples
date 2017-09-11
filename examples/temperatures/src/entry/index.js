import { model, validateModel } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";

export const createEntry = update => ({
  model,
  validateModel,
  view: createView(createActions(update))
});
