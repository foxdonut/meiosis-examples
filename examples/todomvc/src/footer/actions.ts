import { Promise } from "es6-promise";
import { Todo } from "../util";
import { todoStorage } from "../app/todo-storage";
import { actions as mainActions } from "../main/actions";

export const actions = {
  clearCompleted: (update: Function) => () => todoStorage.clearCompleted().then(mainActions.displayTodos)
};
