import { model, validateModel } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";

export const createDate = update => ({
  model,
  validateModel,
  view: createView(createActions(update))
});
