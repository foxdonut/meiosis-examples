import { Promise } from "es6-promise";
import { Todo } from "../util";
import * as actions from "./actions";
import * as model from "./model";

export const todoItem = {
  ...model,
  ...actions
};
