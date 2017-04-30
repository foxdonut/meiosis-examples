import { assoc, merge } from "ramda";

import { credentialsApi } from "../services";

export const createActions = (update, method) => ({
  updateForm: field => evt => update(
    assoc(field, evt.target.value)
  ),

  sendCredentials: model => evt => {
    evt.preventDefault();
    credentialsApi[method]({ user: model }).
      then(user => update(model => merge(model, user))).
      catch(err => update(model => assoc("errors", err.errors, model)));
  }
});
