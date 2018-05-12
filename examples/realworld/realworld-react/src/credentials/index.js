import { createActions } from "./actions";
import { createCredentialsForm } from "../credentialsForm";

export const createCredentials = (update, options) => {
  const { path, method } = options;
  const actions = createActions(update, path, method);
  const callback = actions.sendCredentials;
  //const Component = credentialsForm.create(nest(update, path), options, callback);
  return createCredentialsForm(update, options, callback);
};
