import * as actions from "./actions";
import * as model from "./model";
import { ready } from "./ready";

export const footer = {
  ...model,
  ...actions,
  ready
};

