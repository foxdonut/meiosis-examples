import { createActions } from "./actions";
import { createView } from "./view";

export const createOperations = update => ({
  view: createView(createActions(update))
});
