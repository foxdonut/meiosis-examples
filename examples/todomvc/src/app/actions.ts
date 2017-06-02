import { Promise } from "es6-promise";
import { todoStorage } from "../util";

export const createActions = (updates: any) => ({
  loadAll: () => todoStorage.loadAll().then(updates.displayTodos),
  filter: (by: string) => todoStorage.filter(by).then(updates.displayTodos),
  clearCompleted: () => todoStorage.clearCompleted().then(updates.displayTodos)
});
