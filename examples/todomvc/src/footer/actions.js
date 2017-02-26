import { todoStorage } from "../app/todo-storage";
import { main } from "../main";

export const intents = {
  clearCompleted: () => todoStorage.clearCompleted().then(main.actions.loadAllTodos)
};
