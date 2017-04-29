import { assoc, assocPath, merge } from "ramda";

import { credentialsApi } from "../services";

export const createActions = update => ({
  updateForm: field => evt => update(
    assocPath(["register", field], evt.target.value)
  ),

  register: model => evt => {
    evt.preventDefault();
    credentialsApi.register({ user: model.register }).
      then(user => update(model => merge(model, user))).
      catch(err => update(model => assoc("errors", err.errors, model)));
  }
});
