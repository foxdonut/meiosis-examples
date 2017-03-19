import { ChangeEvent, EventHandler } from "react";
const flyd = require("flyd");
import { Promise } from "es6-promise";
import { todoStorage } from "../app/todo-storage";

export const actions = {
  displayTodos: flyd.stream()
};

const toggleAllTodos: EventHandler<ChangeEvent<HTMLInputElement>> = (evt: ChangeEvent<HTMLInputElement>) =>
  todoStorage.setAllCompleted(evt.target.checked).then(intents.loadAllTodos)

export const intents = {
  loadAllTodos: () => todoStorage.loadAll().then(actions.displayTodos),
  toggleAllTodos
};
