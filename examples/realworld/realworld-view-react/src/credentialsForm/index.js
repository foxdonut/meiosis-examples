import { createActions } from "realworld-state/credentialsForm/actions";
import { createView } from "./view";

export const createCredentialsForm = (update, options, callback) => ({
  view: createView(
    createActions(update, callback),
    options
  )
});
