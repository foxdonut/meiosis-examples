import { actions } from "./actions";
import { todoStorage } from "../app/store";

const clearCompleted = actions.clearCompleted.map(() => model => {
  model.todos = todoStorage.clearCompleted();
  return model;
});

export const modelChanges = clearCompleted;
