const flyd = require("flyd");
import { ChangeEvent, EventHandler, FocusEvent, KeyboardEvent } from "react";
import { Promise } from "es6-promise";
import { todoStorage } from "../app/todo-storage";

export const actions = {
  clearEdit: flyd.stream(),
  editingTodo: flyd.stream(),
  saveTodo: flyd.stream()
};

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

const editBlur: (id: string) => EventHandler<FocusEvent<HTMLInputElement>> = (id: string) => (evt: FocusEvent<HTMLInputElement>) =>
  todoStorage.saveTodo({ id, title: evt.currentTarget.value }).then(actions.saveTodo);

const editChange: (id: string) => EventHandler<ChangeEvent<HTMLInputElement>> = (id: string) => (evt: ChangeEvent<HTMLInputElement>) =>
  actions.editingTodo({ id, title: evt.currentTarget.value });

const editKeyUp: (id: string) => EventHandler<KeyboardEvent<HTMLInputElement>> = (id: string) => (evt: KeyboardEvent<HTMLInputElement>) => {
  const targetValue: string = evt.currentTarget.value;

  if (evt.keyCode === ESCAPE_KEY || evt.which === ESCAPE_KEY) {
    actions.clearEdit(true);
  }
  else if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
    const todo = { id, title: targetValue };
    const editing = !!todo.id;
    todo.title = todo.title.trim();

    if (editing && todo.title) {
      todoStorage.saveTodo(todo).then(actions.saveTodo);
    }
  }
  else {
    actions.editingTodo({ id, title: targetValue });
  }
};

export const intents = {
  editBlur,
  editChange,
  editKeyUp
};
