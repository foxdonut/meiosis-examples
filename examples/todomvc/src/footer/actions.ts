import { Promise } from "es6-promise";
import { todoStorage } from "../app/todo-storage";
import { main } from "../main";

export const intents = {
  clearCompleted: () => todoStorage.clearCompleted().then(main.actions.displayTodos)
};
