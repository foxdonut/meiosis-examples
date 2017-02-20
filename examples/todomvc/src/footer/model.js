import { actions } from "./actions";
import { todoStorage } from "../app/store";

export const modelChanges = actions.clearCompleted.map(() => model => {
  model.todos = todoStorage.clearCompleted();
  return model;
});

/*
Filter: function(by) {
  if (by !== model.filter) {
    model.todos = todoStorage.loadAll();
    model.filter = by;
  }
}
*/
