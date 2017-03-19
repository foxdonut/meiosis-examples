import { Promise } from "es6-promise";
import * as actions from "./actions";
import * as model from "./model";

export const main = {
  ...model,
  ...actions
};
