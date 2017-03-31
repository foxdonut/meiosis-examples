import { compose } from "ramda";
import { createActions } from "./actions";
import { createView } from "./view.jsx";

export const todoItem = {
  create: compose(createView, createActions)
};
