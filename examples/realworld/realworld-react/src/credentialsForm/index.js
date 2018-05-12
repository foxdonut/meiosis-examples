import { createActions } from "./actions";
import { createView } from "./view";

export const createCredentialsForm = (update, options, callback) => ({
  view: createView(
    createActions(update, callback),
    options
  )
});
