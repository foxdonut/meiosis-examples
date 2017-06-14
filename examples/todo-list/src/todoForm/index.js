import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";

export const todoForm = {
  model,
  create: parentActions => update => createView(createActions(update, parentActions))
};
