import { Promise } from "es6-promise";
import { todoStorage } from "../app/todo-storage";
import { actions as mainActions } from "../main/actions";
import { triggerRouteChange } from "../router";

export const actions = {
  clearCompleted: (update: Function) => () => todoStorage.clearCompleted().then(mainActions.displayTodos(update)),
  filterBy: (update: Function, filterBy: string) => () => triggerRouteChange(update, filterBy)
};
