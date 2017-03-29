import { compose } from "ramda";
import { actions } from "./actions";
import { view } from "./view-react";

export const todoItem = {
  create: compose(view, actions)
};
