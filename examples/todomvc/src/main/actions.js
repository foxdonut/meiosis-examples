import flyd from "flyd";
import { todoStorage } from "../app/todo-storage";

export const actions = {
  loadAllTodos: flyd.stream()
};

export const intents = {
  loadAllTodos: () => todoStorage.loadAll().then(actions.loadAllTodos),
  toggleAllTodos: evt => todoStorage.setAllCompleted(evt.target.checked).then(intents.loadAllTodos)
};
