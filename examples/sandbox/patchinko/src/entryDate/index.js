import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view";

export const createEntryDate = label => update => ({
  model: model(label),
  view: createView(createActions(update))
});
