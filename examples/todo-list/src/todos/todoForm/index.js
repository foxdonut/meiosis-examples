import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";

export const createTodoForm = id => ({
  model: () => model(id),
  createActions: createActions(id),
  createView: createView(id)
});
