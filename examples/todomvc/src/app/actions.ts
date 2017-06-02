import { Promise } from "es6-promise";
import { todoStorage } from "../util";

export const createActions = (updates: any) => ({
  loadAll: () => todoStorage.loadAll().then(updates.displayTodos),
  filter: (by: string) => {
    if (by) {
      todoStorage.filter(by).then(updates.displayTodos);
    }
    else {
      todoStorage.loadAll().then(updates.displayTodos);
    }
    updates.filter(by);
  },
  clearCompleted: () => todoStorage.clearCompleted().then(updates.displayTodos)
});
