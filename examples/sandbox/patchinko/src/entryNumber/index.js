import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view";

export const createEntryNumber = update => ({
  model,
  view: createView(createActions(update))
});
