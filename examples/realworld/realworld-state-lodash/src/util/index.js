import _ from "lodash";

export const state = model =>
  _.merge(model, { signedIn: !!_.get(model, ["user", "token"]) });
