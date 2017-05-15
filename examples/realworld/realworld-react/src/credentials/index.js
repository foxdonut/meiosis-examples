import * as R from "ramda";

import { createActions } from "./actions";
import { credentialsForm } from "../credentialsForm";
import { nest } from "../util";

export const credentials = {
  create: (update, options) => {
    const { path, method } = options;
    const actions = createActions(update, path, method);
    const callback = actions.sendCredentials;
    const Component = credentialsForm.create(nest(update, path), options, callback);

    return R.compose(Component, R.path(path));
  }
};
