import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";

export const createEntryNumber = update => ({
  model,
  view: createView(createActions(update))
});
