import { assoc, merge } from "ramda";

import { credentialsApi } from "../services";

export const createActions = (update, method) => ({
  sendCredentials: model => {
    credentialsApi[method]({ user: model }).
      then(user => update(model => merge(model, user))).
      catch(err => update(model => assoc("errors", err.errors, model)));
  }
});
