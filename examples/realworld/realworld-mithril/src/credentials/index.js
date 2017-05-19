import m from "mithril";
import * as R from "ramda";

import { createActions } from "realworld-common/src/credentials/actions";
import { credentialsForm } from "../credentialsForm";
import { nest } from "../util";

export const credentials = {
  create: (update, options) => {
    const { path, method } = options;
    const actions = createActions(update, path, method);
    const callback = actions.sendCredentials;
    const view = credentialsForm.create(nest(update, path), options, callback);
    return R.compose(view, R.path(path));
  }
};
