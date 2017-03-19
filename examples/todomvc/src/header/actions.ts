import { ChangeEvent, EventHandler, KeyboardEvent } from "react";
const flyd = require("flyd");
import { todoStorage } from "../app/todo-storage";

const ENTER_KEY = 13;

export const actions = {
  newTodo: flyd.stream(),
  saveNewTodo: flyd.stream()
};

const saveNewTodo = (title: string) => {
  title = title.trim();

  if (title) {
    todoStorage.saveTodo({title: title}).then(todo => actions.saveNewTodo(todo));
  }
};

const newTodoKeyUp: EventHandler<KeyboardEvent<HTMLInputElement>> = (evt: KeyboardEvent<HTMLInputElement>) => {
  if (evt.keyCode === ENTER_KEY) {
    saveNewTodo(evt.currentTarget.value);
  }
  else {
    actions.newTodo(evt.currentTarget.value);
  }
};

const newTodoKeyUpEnterOnly: EventHandler<KeyboardEvent<HTMLInputElement>> = (evt: KeyboardEvent<HTMLInputElement>) => {
  if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
    saveNewTodo(evt.currentTarget.value);
  }
};

const newTodoChange: EventHandler<ChangeEvent<HTMLInputElement>> = (evt: ChangeEvent<HTMLInputElement>) =>
  actions.newTodo(evt.currentTarget.value);

export const intents = {
  newTodoKeyUp,
  newTodoKeyUpEnterOnly,
  newTodoChange
};
