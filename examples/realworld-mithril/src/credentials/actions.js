import m from "mithril";
import { append, assocPath, merge } from "ramda";

import { credentialsApi } from "../services";

export const createActions = (update, path, method) => ({
  sendCredentials: model => {
    credentialsApi[method]({ user: model }).
      then(user => {
        update(model => merge(model, user));
        m.route.set("/");
      }).
      catch(err => update(model => assocPath(append("errors", path), err.errors, model)));
  }
});
