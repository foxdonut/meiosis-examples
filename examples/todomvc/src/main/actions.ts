import flyd from "flyd";
import { todoStorage } from "../app/todo-storage";

export const actions = {
  displayTodos: flyd.stream()
};

export const intents = {
  loadAllTodos: () => todoStorage.loadAll().then(actions.displayTodos),
  toggleAllTodos: evt => todoStorage.setAllCompleted(evt.target.checked).then(intents.loadAllTodos)
};
