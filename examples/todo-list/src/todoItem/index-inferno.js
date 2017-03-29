import { compose } from "ramda";
import { actions } from "./actions";
import { view } from "./view-inferno.jsx";

export const todoItem = {
  create: compose(view, actions)
};
