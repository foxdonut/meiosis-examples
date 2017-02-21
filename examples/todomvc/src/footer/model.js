import { actions } from "./actions";
import { mergeIntoOne } from "../util";
import { todoStorage } from "../app/store";

const clearCompleted = actions.clearCompleted.map(() => model => {
  model.todos = todoStorage.clearCompleted();
  return model;
});

const filter = actions.filter.map(by => model => {
  if (by !== model.filter) {
    model.todos = todoStorage.loadAll();
    model.filter = by;
  }
  return model;
});

export const modelChanges = mergeIntoOne([
  clearCompleted,
  filter
]);
