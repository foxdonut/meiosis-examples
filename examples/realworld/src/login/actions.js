import { assoc, assocPath, merge } from "ramda";

import { credentialsApi } from "../services";

export const createActions = update => ({
  updateForm: field => evt => update(
    assocPath(["login", field], evt.target.value)
  ),

  login: model => evt => {
    evt.preventDefault();
    credentialsApi.login({ user: model.login }).
      then(user => update(model => merge(model, user))).
      catch(err => update(model => assoc("errors", err.errors, model)));
  }
});
