import { assoc, merge } from "ramda";

import { credentialsApi } from "../services";

export const createActions = (topUpdate, nestedUpdate, method) => ({
  updateForm: field => evt => nestedUpdate(
    assoc(field, evt.target.value)
  ),

  sendCredentials: model => evt => {
    evt.preventDefault();
    credentialsApi[method]({ user: model }).
      then(user => topUpdate(model => merge(model, user))).
      catch(err => topUpdate(model => assoc("errors", err.errors, model)));
  }
});
