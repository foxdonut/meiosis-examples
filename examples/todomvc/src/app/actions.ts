import { Promise } from "es6-promise";
import { flowRight } from "lodash";
import { Todo, todoStorage } from "../util";

export const createActions = (updates: any) => ({
  loadAll: () => todoStorage.loadAll().then(updates.displayTodos),
  filter: (by: string) => {
    const updateFn = (todos: Todo[]) =>
      updates.update(flowRight([updates.displayTodosFn(todos), updates.filterFn(by)]));

    if (by) {
      todoStorage.filter(by).then(updateFn);
    }
    else {
      todoStorage.loadAll().then(updateFn);
    }
  },
  clearCompleted: () => todoStorage.clearCompleted().then(updates.displayTodos)
});
